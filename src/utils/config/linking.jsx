const config = {
  screens: {
    Login: "login",
    Register: "register",
    MainRoute: {
      screens: {
        Home: "home",
        Community: "community",
        Auction: "auction",
        Account: "account",
      },
    },
    AccountEdit: "account/edit",
    AccountEditAddress: "account/edit/address",
    CommunityAdd: "community/add",
    AuctionAdd: "auction/add",
  },
};

export const linking = {
  config,
};
