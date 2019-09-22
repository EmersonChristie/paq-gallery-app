// const { ApolloServer, gql } = require("apollo-server");
// const Artwork = require("./Artwork.js");

// const typeDefs = gql`
//   type Query {
//     getArt: [Artwork]
//   }

//   type Localization {
//     CurrencySymbol: String
//     CurrencySymbolPlacement: Int
//     DecimalPoint: String
//     DefaultTaxPercent: Int
//     Metric: Int
//     ThousandsSeperator: String
//   }

//   type Img {
//     ImageId: Int
//     S3Id: String
//     CloudinaryId: String
//     Urls: String
//     Url: String
//     SmallUrl: String
//     MediumUrl: String
//     LargeUrl: String
//     GiantUrl: String
//     PrimaryR: Int
//     PrimaryG: Int
//     PrimaryB: Int
//     SecondaryR: Int
//     SecondaryG: Int
//     SecondaryB: Int
//     TertiaryR: Int
//     TertiaryG: Int
//     TertiaryB: Int
//     Width: Int
//     Height: Int
//     Cover: Boolean
//   }

//   type Address {
//     AddressId: Int
//     AddressLineOne: String
//     AddressLineTwo: String
//     City: String
//     Country: String
//     Latitude: Float
//     Longitude: Float
//     State: String
//     Zip: String
//   }

//   type Profile {
//     AcceptsPayments: Boolean
//     Company: String
//     DisplayName: String
//     Featured: String
//     Phone: String
//     ProfileId: Int
//     Type: Int
//     Localization: Localization
//     Img: Img
//     Address: Address
//   }

//   type Images {
//     ImageId: Int
//     S3Id: String
//     CloudinaryId: String
//     Urls: String
//     Url: String
//     SmallUrl: String
//     MediumUrl: String
//     LargeUrl: String
//     GiantUrl: String
//     PrimaryR: Int
//     PrimaryG: Int
//     PrimaryB: Int
//     SecondaryR: Int
//     SecondaryG: Int
//     SecondaryB: Int
//     TertiaryR: Int
//     TertiaryG: Int
//     TertiaryB: Int
//     Width: Int
//     Height: Int
//     Cover: Boolean
//   }

//   type Dimensions {
//     Formatted: String
//     Height: Int
//     Width: Int
//     Depth: Int
//     Metric: Int
//   }

//   type Editions {
//     EditionId: Int
//     ArtId: Int
//     Active: Boolean
//     Edition: String
//     Location: String
//     Notes: String
//     Number: String
//     Price: String
//     _FormattedPrice: String
//     _Price: Int
//     SKU: String
//     Dimensions: Dimensions
//   }

//   type Artist {
//     ArtistId: Int
//     About: String
//     Birthdate: String
//     Name: String
//     Notes: String
//     Image: String
//     Profile: String
//     Tags: [String]
//   }

//   type Artwork {
//     ArtId: Int
//     Date: String
//     EditionCount: String
//     Genre: Int
//     Medium: String
//     Metric: Int
//     Title: String
//     Tags: String
//     Type: Int
//     EditionType: Int
//     Profile: Profile
//     Images: [Images]
//     Editions: [Editions]
//     Dimensions: Dimensions
//     Artist: Artist
//   }
// `;

// const resolvers = {
//   Query: {
//     getArt: async (_, __, { dataSources }) => dataSources.Artwork.getArt()
//   }
// };

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   dataSources: () => ({
//     Artwork: new Artwork()
//   })
// });

// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });
