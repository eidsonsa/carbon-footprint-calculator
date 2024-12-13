import { calculateTransportationFootprint } from "../calculator/transportation";
import { calculateWasteFootprint } from "../calculator/waste";
import { Resolvers } from "../generated/graphql";

const resolvers: Resolvers = {
  Query: {
    getTransportationFootprint: (_, { input }) =>
      calculateTransportationFootprint(input),
    getWasteFootprint: (_, { input }) => calculateWasteFootprint(input),
  },
};

export default resolvers;
