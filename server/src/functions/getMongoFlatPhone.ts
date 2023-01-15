export function getMongoFlatPhone(field: any): any {
  return {
    $replaceAll: {
      input: {
        $replaceAll: {
          input: {
            $replaceAll: {
              input: {
                $replaceAll: {
                  input: field,
                  find: " ",
                  replacement: ""
                }
              },
              find: ")",
              replacement: ""
            }
          },
          find: "(",
          replacement: ""
        }
      },
      find: "-",
      replacement: ""
    }
  }
}