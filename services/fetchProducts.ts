export type Measurements = {
  height: string,
  width: string,
  lenght: string
}

export type ProductType = {
  sku: string,
  name: string,
  collection: string,
  categoryHierarchy: string,
  measurements: Measurements,
  price: string
  priceDiscount: number,
  imageUrl: string,
  store: string,
  ecoPart: string,
  materials: string,
  usage: string,
  assemblyTime: number,
  assemblyDescription: string,
}

export const fetchProducts = async (): Promise<ProductType[]> => {
  return fetch('https://kavehome.com/nfeeds/es/es/templatebuilder/20211212')
    .then(res => res.json())
    .then(data => {
      return data.results.map((p: any) => {
        return convert(p);
      });
    });
}

const convert = (p: any): ProductType => {
  return {
    sku: p.productSku,
    name: p.productName,
    collection: p.productCollection,
    categoryHierarchy: p.productCategoryHierarchy,
    measurements: p.productMeasurements,
    price: p.productPrice,
    priceDiscount: p.productPriceDiscount,
    imageUrl: p.productImageUrl,
    store: p.store,
    ecoPart: p.echoPart,
    materials: p.productMaterials,
    usage: p.productUsage,
    assemblyTime: p.productAssemblyTime,
    assemblyDescription: p.productAssemblyDescription
  }
}
