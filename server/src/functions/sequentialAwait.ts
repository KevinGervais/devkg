export async function sequentialAwait<Data>(
  dataList: Data[],
  dataFn: (data: Data, index: number) => Promise<void>
): Promise<any> {
  let index = 0
  for (const data of dataList) {
    await dataFn(data, index)
    index++
  }
}