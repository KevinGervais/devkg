export function simplifyQuery<Data>(
  data: Data,
  excluded: (keyof Data)[] = []
): Data {
  const query: Data = {} as Data
  Object.keys(data!).forEach((key: string) => {
    const dataKey = key as keyof Data
    if (data[dataKey] !== undefined && !excluded.includes(dataKey)) {
      query[dataKey] = data[dataKey]
    }
  })
  return query
}