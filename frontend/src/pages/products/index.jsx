import { Box, useMediaQuery } from '@mui/material';
import Header from 'components/header/Header';
import React from 'react';
import { useGetProductsQuery } from 'state/api';
import Product from './component/Product';

const Products = () => {

  const { data, isLoading } = useGetProductsQuery();
  const isNoneMobile = useMediaQuery("(min-width: 1000px)");
  console.log('data: ',data);

  return (
    <Box pb="40px" m="1.5rem 2.5rem">
       <Header title="Products" subtitle="List of Products" />
       {data || !isLoading ? (
        <Box
         mt="20px"
         display="grid"
         gridTemplateColumns="repeat(4, minmax(0, 1fr))"
         justifyContent="space-between"
         rowGap="20px"
         columnGap="1.33%"
         sx={{
            "& > div": { gridColumn: isNoneMobile ? undefined : "span 4" }
         }}
        >

         {data.map(({ _id, name, description, price, rating, category, supply, stat }) => (

            <Product
             key={_id}
             _id={_id}
             name={name}
             description={description}
             price={price}
             rating={rating}
             category={category}
             supply={supply}
             stat={stat}  />
         ))}

        </Box>
       ): (<>Loading...</>)}
    </Box>
  )
}

export default Products;