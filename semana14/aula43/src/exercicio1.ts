export function exercicio1(first: number,second: number): void {

  const sum: number = first + second;
  const sub: number = first - second;
  const mult: number= first * second;

  let greater: string = undefined;
  if(first > second){
    greater = "First Number"
  }else if(second >first){
    greater = "Second Number"
  }
  console.log("Exercicio 1")
  console.log("sum: "+sum + " sub: "+sub+" mult: "+mult+ " the greather number is: "+ greater);
}
