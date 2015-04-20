export default function(){  
  this.transition(
    this.fromRoute('index'),
    this.toRoute('work'),
    this.use('toUp'),
    this.reverse('toDown')
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('login'),
    this.use('toDown'),
    this.reverse('toUp')
  );
}
