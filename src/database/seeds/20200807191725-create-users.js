const bcryptjs = require('bcryptjs');

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'admin',
          email: 'admin@admin.admin',
          password_hash: await bcryptjs.hash('admin', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  down: async () => {},
};
