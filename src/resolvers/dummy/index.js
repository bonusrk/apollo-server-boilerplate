import Model from '../../models/dummy';

const resolver = {
  Query: {
    allDummy: async () => {
      const list = await Model.find();
      return list;
    },
    dummy: async (root, { id }) => {
      const entity = await Model.findById(id);
      return entity;
    },
  },
  Mutation: {
    createDummy: async (root, { dummy }) => {
      const entity = new Model(dummy);
      const saved = await entity.save();
      return saved;
    },
  },
};

module.exports = resolver;
