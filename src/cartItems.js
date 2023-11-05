import item1Path from "./assets/item1.png";
import item2Path from "./assets/item2.png";
import item3Path from "./assets/item3.png";
import item4Path from "./assets/item4.png";

const cartItems = [
  {
    id: 1,
    title: "Next.js入門講座",
    price: "12000",
    img: item2Path,
    amount: 1,
  },
  {
    id: 2,
    title: "MERNスタックで本格的なSNSアプリ構築講座",
    price: "24000",
    img: item1Path,
    amount: 1,
  },
  {
    id: 3,
    title: "GraphQLとApollo入門講座",
    price: "8900",
    img: item3Path,
    amount: 1,
  },
  {
    id: 4,
    title: "Three.jsでモダンウェブサイト構築講座",
    price: "14000",
    img: item4Path,
    amount: 1,
  },
];

export default cartItems;
