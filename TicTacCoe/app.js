let count=0;
let TheEnd = false;
let mapX =[[]];
let mapNolic=[[]];
for (let i = 0; i <3 ; i++) {
    mapX[i]=new Array(3);
    mapNolic[i]=new Array(3);
    for (let j = 0; j <3 ; j++) {
        mapX[i][j]=0;
        mapNolic[i][j]=0;

    }

}


function RandomCreateImage(rectangle,index){
    if(index !==-1) {
        let row = Math.floor(index / 3);
        let col = index % 3;
        console.log(row, col)
        mapNolic[row][col] = 1;
        const img = document.createElement('img')
        img.src = "nolik.png";
        count++;
        rectangle.appendChild(img);

    }



}

function CreateImage(rectangle,index){
        let row = Math.floor(index/3);
        let col = index%3;
        if(index!==-1 && rectangle.childNodes.length===0) {

            if (mapX[row][col] === 0) {
                mapX[row][col] = 1;

                const img = document.createElement('img')
                img.src = "krestik.jpg";
                rectangle.appendChild(img);
                count++;
              //  isEnd(mapX);
                return true;
            }
        }else{
            return false;
        }




}
let setka=[]
let visited =[];
let value = document.querySelector('.container');
for (let i = 0; i <3 ; i++) {
    for (let j = 0; j <7 ; j++) {
        if(j%2===1){
            setka.push(value.childNodes[j])
        }
    }

     value =value.nextElementSibling;


}

console.log(mapX)
console.log(mapNolic)



window.onclick=(event)=>{
    let index=-1;
    const rectangle = event.target;
    for (let i = 0; i <9 ; i++) {
        if(rectangle===setka[i]){
            visited.push(i);
            index = i;
        }
    }
    let bool;


         bool = CreateImage(rectangle, index);

    if(isEnd(mapX)){
        console.log(mapX)
        TheEnd=true;
        setTimeout(()=>alert("win X"),1000)
    }
        let randomIndex;
        let temp=CheckMap();
        if(temp!==-1){
            randomIndex =temp;
        }else {
            randomIndex = randomCor();
        }
        visited.push(randomIndex);
       if(bool && !TheEnd) {
           RandomCreateImage(setka[randomIndex], randomIndex);
           if(isEnd(mapNolic)){
               TheEnd=true;

               setTimeout(()=>alert("win Nolic"),1000)
           }
       }
       if(count>8){
           alert("draw")
       }




};
function isEnd(map){
    let sum=0;
    let sumR=0;
    for (let i = 0; i <3 ; i++) {
        sum=0;
        sumR=0;
        for (let j = 0; j <3 ; j++) {
            sum = sum+map[i][j];
            sumR += map[j][i];

        }
        if(sum===3 || sumR===3){
            return true;
        }
    }
    sum=0;
    sumR=0;
    for (let i = 0,j=2; i <3 && j>=0 ; i++,j--) {

        sum = sum+map[i][i];
        sumR =sumR+ map[i][j];


    }
    if(sum===3 || sumR===3){
        return true;
    }
    return false;


}
/**
 * @return {number}
 */
function CheckMap(){
    for (let i = 0; i <3 ; i++) {
        for (let j = 0; j <3 ; j++) {
            if(mapX[i][j]!==1){
                mapX[i][j]=1;
                if(isEnd(mapX)){
                    if(!visited.includes(i*3+j)) {
                        mapX[i][j]=0;
                        return i * 3 + j;
                    }
                }
                mapX[i][j]=0;
            }
        }
        return -1;
    }




}
function randomCor(){
    let randomIndex = Math.floor(Math.random()*8);

    if(visited.length<9) {
        while (visited.includes(randomIndex, 0)) {
            randomIndex = Math.floor(Math.random()*8);

        }
      
        return randomIndex;
    }
    else{
        return  -1;
    }


}
