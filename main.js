
    /*
        * id grape all
    */
    const bangla = document.getElementById('bangla');
    const english = document.getElementById('english');
    const math = document.getElementById('math')
    const gk = document.getElementById('gk');


    /* 
        * cls এর মাধ্যমে সব গুলা input এক সাথে ধরা হয়েছে ।
        * যদি input এর value 100 এর চেয়ে বেশি হয় বা - হয় 
        * তাহলে input box red হয়ে যাবে ।
    */
    const inputF = document.querySelectorAll(".inputF");

    for(let i=0; i<inputF.length; i++){
        inputF[i].addEventListener('input', function(){
            for(let k=0; k<inputF.length; k++){
                if(inputF[k].value > 100 || inputF[k].value < 0){
                    inputF[k].style.background = 'red';
                }else{
                    inputF[k].style.background = 'none';
                }
            }
        })
    }
    // --------end-------



    const addBtn = document.getElementById('addBtn');
    addBtn.addEventListener('click', ()=>{
        
        /*
            input vaule যদি ফাকা হয় তাহলে alert show করবে ।
        */
    if(bangla.value ==='' || english.value==='' || math.value==='' || gk.value===''){
        alert('please fill the input field');
    }

    else{
        let newBangla = parseInt(bangla.value);
        let newEnglish = parseInt(english.value);
        let newMath = parseInt(math.value);
        let newGk = parseInt(gk.value);

        
            // --- Total mark    
        const newTotalMark = document.getElementById('totalMark');

        const TotalMark = newBangla + newEnglish + newMath + newGk;
        newTotalMark.innerHTML = TotalMark;
        newTotalMark.style.background = 'yellow';


            //----Total Average
            const avg = document.getElementById('avg');
            const totalAvg = TotalMark/4;
            avg.innerHTML = totalAvg;
            avg.style.background = 'yellow';



            // ------Grade
            const grade = document.getElementById('grade');

            if(totalAvg>=80 && totalAvg<100){
                grade.innerHTML = 'A+';
                grade.style.background = 'yellow';
            }
            else if(totalAvg>=60 && totalAvg<80){
                grade.innerHTML = 'B';
                grade.style.background = 'yellow';
            }
            else if(totalAvg>=40 && totalAvg<60){
                grade.innerHTML = 'C';
                grade.style.background = 'yellow';
            }
            else if(totalAvg < 40){
                grade.innerHTML = 'F';
                grade.style.background = 'red';
                grade.style.color = 'white'; 
            }
            else{
                grade.innerHTML = 'Invalid';
            }
            


            // ------pass/faild
            const pass = document.getElementById('pass');

            if(totalAvg >= 40){
                pass.innerHTML = 'You are passed';
                pass.style.background = 'green'; 
                pass.style.color = 'white'; 
            }
            else{
                pass.innerHTML = 'You are faild'
                pass.style.background = 'red';
                pass.style.color = 'white'; 
            }
    }
    })