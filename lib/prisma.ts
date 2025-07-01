// Тимчасова заглушка для успішного білда
export const prisma = {
  user: {
    findUnique: async (): Promise<any> => null,
    create: async (): Promise<any> => null,
    update: async (): Promise<any> => null,
  },
  generation: {
    findMany: async (): Promise<any[]> => [],
    create: async (): Promise<any> => null,
    delete: async (): Promise<any> => null,
  }
}