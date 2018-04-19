FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('HomeLayout');
  }
});

//route for the dynamic content
FlowRouter.route('/recipe-book', {
  name: 'recipe-book',
  action() {
    BlazeLayout.render('MainLayout', { main: 'Recipes' });
  }
});