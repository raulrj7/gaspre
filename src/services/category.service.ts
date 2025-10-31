import { categories } from "../data/categories";

export interface Category {
  id: number;
  name: string;
  subcategories: Category[];
}

export class CategoryService {
  private root: Category;

  constructor() {
    this.root = categories;
  }

  public async getCategoryPaths(): Promise<{ code: number; data?: string[]; message?: string }> {
    try {
      const paths: string[] = [];

      const traverse = (category: Category, currentPath: string) => {
        const newPath = currentPath ? `${currentPath}/${category.name}` : category.name;

        if (!category.subcategories || category.subcategories.length === 0) {
          paths.push(newPath);
        } else {
          for (const sub of category.subcategories) {
            traverse(sub, newPath);
          }
        }
      };

      traverse(this.root, "");
      return { code: 200, data: paths };
    } catch (error) {
      return { code: 500, message: "Error obteniendo rutas de categorías" };
    }
  }

  public async findCategoryById(
    id: number
  ): Promise<{ code: number; data?: Category; message?: string }> {
    try {
      const search = (category: Category): Category | null => {
        if (category.id === id) return category;

        for (const sub of category.subcategories) {
          const found = search(sub);
          if (found) return found;
        }

        return null;
      };

      const result = search(this.root);

      if (!result) return { code: 404, message: "Categoría no encontrada" };
      return { code: 200, data: result };
    } catch (error) {
      return { code: 500, message: "Error buscando la categoría" };
    }
  }
}
