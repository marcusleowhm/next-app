import Link from "next/link";

function ProductList() {
    return (
        <>
            <br/>
            <Link href='/firstpage'>Home</Link>
            <br/>
            <br/>
            <Link href='/product/1'>Product 1</Link>
            <Link href='/product/2'>Product 2</Link>
            <Link href='/product/3'>Product 3</Link>
        </>
    )

}

export default ProductList;