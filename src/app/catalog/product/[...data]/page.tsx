import { AddToCartButton } from "./add-to-cart-button";
import { Test } from "./test";

interface ProductProps {
  params: {
    data: string[]
  }
}

// Server Components => Não se usa JS no lado do cliente
// Client Components => O JS é enviado ao navegador (cliente)

// Streaming SSR => Ler/Escrever dados de forma parcial + Server-side Rendering
// Renderizar um componente pelo lado do servidor de forma parcial

export default async function Product({ params }: ProductProps) {
  const [productId, size, color ] = params.data;

  const response = await fetch('https://api.github.com/users/thiagolago1');
  const user = await response.json();

  return (
    <div>
      <h1>ProductId {productId}</h1>
      <h1>Size {size}</h1>
      <h1>Color {color}</h1>

      <AddToCartButton>
        <Test />
        {/** O Test aqui é um server component */}
      </AddToCartButton>
    </div>
  );
}