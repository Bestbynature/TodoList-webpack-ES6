class Edupclear {
  update(item) {
    this.tasks = [{
      index: 1,
      description: 'going to the restaurant',
      completed: false,
    }];
    this.tasks[0].description = item;
    return this.tasks;
  }

  status(index) {
    this.tasks[index].completed = true;
    return this.tasks;
  }

  clearer = () => {
    this.tasks = [{
      index: 1,
      description: 'going to the restaurant',
      completed: true,
    }];
    if (this.tasks[0].completed === true) {
      this.tasks.pop();
    }
    return this.tasks;
  }
}

module.exports = Edupclear;