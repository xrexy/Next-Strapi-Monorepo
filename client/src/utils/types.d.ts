declare interface Movie {
  title: string;
}

declare interface StrapiResponse<T> {
  result: {
    id: number;
    attributes: T & {
      createdAt: Date;
      updatedAt: Date;
      publishedAt: Date;
    };
  }[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
