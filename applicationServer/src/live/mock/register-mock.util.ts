import { REDIS_LIVE_KEY, REDIS_LIVE_LIST_KEY } from '@src/constants';

function registerMockLive(redisService) {
  const mockBroadcastIdList = [
    '872bc363-0d0c-4bde-a867-7b0edd076ad6',
    '9b534e89-a596-436a-b314-65cbe0ff9fab',
    'b15b9d6e-e933-47fa-80a6-8c3470822e25',
    '58fefadc-3fbd-40ad-bce1-f769c02c887f',
    'fec06dd7-11b4-4efd-b69e-5a9dc93c3891',
  ];
  const mockNameList = [
    '부정적인회색늑대1145',
    '완벽한고슴도치1272',
    '열정적인눈표범1449',
    '고상한닭1321',
    '흐뭇한깃대말1177',
  ];

  const contentCategoryList = ['music', 'talk', null, 'cook', 'mukbang'];
  const moodCategoryList = [null, 'calm', null, 'happy', null];

  mockBroadcastIdList.forEach(async (data, idx) => {
    await redisService.addSetType(REDIS_LIVE_LIST_KEY, mockBroadcastIdList[idx]);
    redisService.set(
      `${REDIS_LIVE_KEY}${mockBroadcastIdList[idx]}`,
      JSON.stringify({
        broadcastId: mockBroadcastIdList[idx],
        broadcastPath: `${mockBroadcastIdList[idx]}`,
        title: `${mockNameList[idx]}의 라이브 방송`,
        contentCategory: contentCategoryList[idx],
        moodCategory: moodCategoryList[idx],
        tags: [`방송 ${idx}`],
        thumbnailUrl: `https://kr.object.ncloudstorage.com/media-storage/${mockBroadcastIdList[idx]}/dynamic_thumbnail.jpg`,
        viewerCount: 0,
        userName: mockNameList[idx],
        profileImageUrl: 'https://kr.object.ncloudstorage.com/funch-storage/profile/profile_default.png',
      }),
    );
  });
}

export { registerMockLive };
