'use client';

import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Avatar, Tooltip, Button, Spinner } from '@nextui-org/react';
import { IoIosMore } from 'react-icons/io';
import { MdOutlineRefresh } from 'react-icons/md';
import { RouteData } from '@/types/route';
import { API_BASE_URL } from '@/config';
import { getTimeDifference } from '@/utils/timeUtils';

const HotListCard = async ({ apiName, apiPath }: { apiName: string; apiPath: string }) => {
	let data: RouteData | undefined;
	const fetchData = async (path: string) => {
		try {
			const dataRes = await fetch(`${API_BASE_URL}/${path}`);
			const result = await dataRes.json();
			return result;
		} catch (error) {
			console.log('Failed to fetch data:', error);
			return undefined;
		}
	};
	data = await fetchData(apiPath);

	if (!data) {
		return <></>;
	}

	return (
		<>
			<Card className="max-w-[360px]">
				<CardHeader className="justify-between">
					<div className="flex gap-4">
						<Avatar isBordered radius="full" size="md" src="https://nextui.org/avatars/avatar-1.png" />
						<div className="flex items-center justify-center">{apiName}</div>
					</div>
					<span>{data.type}</span>
				</CardHeader>
				<CardBody className="px-3 py-0 text-small text-gray-900 dark:text-white">
					<p>Frontend developer and UI/UX enthusiast. Join me on this coding adventure!</p>
					<span className="pt-2">
						#FrontendWithZoey
						<span className="py-2" aria-label="computer" role="img">
							💻
						</span>
					</span>
				</CardBody>
				<CardFooter className="justify-between">
					<div className="flex gap-1">
						<p className="font-semibold text-default-400 text-small">4</p>
						<p className=" text-default-400 text-small">{getTimeDifference(data.updateTime)}</p>
					</div>
					<div className="flex gap-1">
						<Tooltip placement="top" content="查看更多" closeDelay={100}>
							<Button isIconOnly aria-label="more" color="secondary">
								<IoIosMore />
							</Button>
						</Tooltip>
						<Tooltip placement="top" content="获取最新" closeDelay={100}>
							<Button
								isIconOnly
								aria-label="refresh"
								color="secondary"
								onPress={async () => (data = await fetchData(apiPath))}>
								<MdOutlineRefresh />
							</Button>
						</Tooltip>
					</div>
				</CardFooter>
			</Card>
		</>
	);
};

export default HotListCard;
