'use strict';

module.exports = function (app) {
    var todoList = require('../controllers/Controllers');

    // todoList Routes
    app.route('/users')
        .post(todoList.users)
        .get(todoList.create_user);

    app.route('/user/:taskId')
        .get(todoList.get_user)
        .put(todoList.update_a_user)
        .delete(todoList.delete_a_user);

    app.route('/sms')
        .get(todoList.allsms)
        .post(todoList.add_sms);

    app.route('/user/:taskId')
        .get(todoList.get_sms)
        .delete(todoList.delete_a_sms);
};
