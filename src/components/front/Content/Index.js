import Banners from './Banners'
import CatSection from './CatSection'

function Index() {
    const products = [
        {id: 1, name : '1ABC', img :'https://bizimages.withfloats.com/actual/5c962f512a945a00019f52e6.jpg'},
        {id: 2, name : '2ABC', img :'https://bizimages.withfloats.com/actual/5c962f512a945a00019f52e6.jpg'},
        {id: 3, name : '3ABC', img :'https://bizimages.withfloats.com/actual/5c962f512a945a00019f52e6.jpg'},
        {id: 4, name : '3ABC', img :'https://bizimages.withfloats.com/actual/5c962f512a945a00019f52e6.jpg'},
    ];
    return (
        <div>
            <Banners />
            <CatSection name="Top Selling" products={products} />
            <CatSection name="Top Buying" products={products} />
            <CatSection name="Top Trending" products={products} />
            <CatSection name="Popular" products={products} />
        </div>
    )
  }
  
export default Index
  