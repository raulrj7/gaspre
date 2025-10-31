import { CategoryService } from "../category.service";

describe("CategoryService", () => {
  let service: CategoryService;

  beforeEach(() => {
    service = new CategoryService();
  });

  test("getCategoryPaths devuelve todas las rutas correctamente", async () => {
    const { code, data } = await service.getCategoryPaths();
    expect(code).toBe(200);
    expect(data).toContain("Electrónica/Computadoras/Laptops");
    expect(data).toContain("Electrónica/Computadoras/Periféricos/Teclados");
    expect(data).toContain("Electrónica/Celulares/Accesorios/Fundas");
  });

  test("findCategoryById encuentra categoría por id", async () => {
    const { code, data } = await service.findCategoryById(15);
    expect(code).toBe(200);
    expect(data?.name).toBe("Teclados");
  });

  test("findCategoryById devuelve 404 si no existe", async () => {
    const { code, message } = await service.findCategoryById(999);
    expect(code).toBe(404);
    expect(message).toBe("Categoría no encontrada");
  });
});
