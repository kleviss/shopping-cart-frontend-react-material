import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import OrderSummaryItem from "./OrderSummaryItem";
import ShoppingCartItem from "./ShoppingCartItem";

export default function ShoppingCart() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={7} lg={7}>
            <Grid container>
              <Grid item xs>
                <ShoppingCartItem />
                <ShoppingCartItem />
                <ShoppingCartItem />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={5} lg={5}>
            <Grid item xs elevation={3}>
              <OrderSummaryItem />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
