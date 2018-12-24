exports.mocks = {
  ID: () => 1,
  Post: () => ({
    id: 1,
    title: 'こんにちは',
    content: '今日はいい天気〜♪',
    posted_at: '2018-12-01T00:00:00Z',
  }),
  Comment: () => ({
    id: 1,
    content: 'お魚加えたどら猫、財布を忘れて',
    posted_at: '2018-12-01T00:00:00Z',
  }),
};