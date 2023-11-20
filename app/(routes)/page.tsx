import getBillboard from "@/actions/get-billboards";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import getProducts from "@/actions/get-products";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({isFeatured: true});
  const billboard = await getBillboard("ee39792e-1fa8-4b70-8d1c-412df13e3130");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard 
          data={billboard}
        />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
};

export default HomePage;