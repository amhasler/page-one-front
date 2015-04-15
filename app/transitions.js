export default function(){  
  this.transition(
    this.fromRoute('index'),
    this.toRoute('work'),
    this.use('toUp'),
    this.reverse('toDown')
  );
}
