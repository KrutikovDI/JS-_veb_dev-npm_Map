import ErrorRepository from "./main"

test("Проверяем поиск существующей ошибки", () => {
  const oversize = new ErrorRepository();
  expect(oversize.translate(3)).toBe('Такой страницы не существует');
})

test ("ПРоверяем поиск несуществующей страницы", () => {
  const oversize = new ErrorRepository();
  expect(() => {oversize.translate(10)}).toThrow('Unknown error');
})