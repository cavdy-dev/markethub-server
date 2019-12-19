const Mutations = {
  async createItem(parent, args, ctx, info) {
    // TODO: Check if they are logged in
    const item = await ctx.db.mutation.createItem({ data: { ...args } }, info);
    return item;
  },
  async updateItem(parent, args, ctx, info) {
    // TODO: Check if they are logged in
    const update = { ...args };
    delete update.id;
    const item = await ctx.db.mutation.updateItem(
      { data: update, where: { id: args.id } },
      info
    );
    return item;
  },
  async deleteItem(parent, args, ctx, info) {
    // TODO: Check if they are logged in
    const where = { id: args.id };
    const item = await ctx.db.query.item({ where }, `{id title}`);
    const deleteItem = await ctx.db.mutation.deleteItem({ where }, info);
    return deleteItem;
  }
};

module.exports = Mutations;
