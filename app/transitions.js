export default function(){  
  this.transition(
    this.fromRoute('index'),
    this.toRoute('works.work'),
    this.use('toUp'),
    this.reverse('toDown')
  );
}
