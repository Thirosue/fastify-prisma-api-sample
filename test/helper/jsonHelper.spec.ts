import { toJson } from '../../src/helper/jsonHelper';

const json =
{
  "at": 1,
  "stock": 3
};

const bigIntValue = BigInt(1622509200000);

const json2 =
{
  "at": bigIntValue,
  "stock": 3
};

describe('toJsonを', () => {
  it('bigIntを含まない値で呼び出した場合、値がそのまま返ってくること', () => {
    const results = toJson(json)
    expect(results).toContain('"at":1,')
  })

  it('bigIntを含む値で呼び出した場合、nを除いた値を返すこと', () => {
    const results = toJson(json2)
    expect(results).toContain('"at":1622509200000,')
  })
})

