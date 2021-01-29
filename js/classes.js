class Html{

    //show error for input &email
    error(errorText){
        let errorElement = document.createElement('div');
        $(errorElement).addClass('errorElement');
        errorElement.textContent= errorText;
        $('.input1').before(errorElement);
        setInterval(() => {
            errorElement.remove();
        }, 3000);
    }
    //for when inputs true,submit btn active
    btnActive(){
        if($('#input1').val().length > 0 && $('#input2').val().length > 0 && $('#input3').val().length > 0){
            let input2 = document.querySelector('#input2').value
           if(input2.includes('@')){
                $(submitBtn).removeClass('disabled');
           }else{
               this.error('Email address is wrong')
           }
        }
    }   
}


//localStorage
class Shopping{
    //send details card to shopping card
    sendToShopCard(infoCard){
        $('.shop-hover table tbody').append(`
        <tr class="tr-infocard">
            <td><img src="${infoCard.image}" class="table-img"></td>
            <td class="title">${infoCard.title}</td>
            <td>${infoCard.price}</td>
            <td><a href="" class="btn-shop"><i class="tf-ion-android-close"></i></a></td>
        </tr>
        `)
         this.saveToStorage(infoCard)
    }
    //click to remove icon for remove tr tag details card
    removeShop(){
        let course;
        let that = this
        $('.shop-hover table tbody tr td .btn-shop').click(function (e) {
            e.preventDefault(); 
            course =  $(this).parent().parent();
            $(this).parent().parent().remove();
            if($('.nav-icon-1').hasClass('active')){
                $('.nav-icon-1').removeClass('active');
                $('.nav-icon-1').addClass('active1');
            }
            that.deleteOnLocalStorage(course);
        });
    }

    //click on .btn-shop delete infocard on localStorage
    deleteOnLocalStorage(course){
        let coursels = this.getFromStorage();
        let title = course.children('.title').text()
        coursels.forEach(function(infocard,index) {
            if (infocard.title == title) {
                coursels.splice(index,1)
            }
            localStorage.setItem('courses',JSON.stringify(coursels))
        });
    }

    //save infocard to local storage
    saveToStorage(course){
        let courses = this.getFromStorage();
        courses.push(course);
        localStorage.setItem('courses',JSON.stringify(courses))
        this.removeShop()
    }
    //check localstorage 
    getFromStorage(){
        let courses;
        if(localStorage.getItem('courses')){
            courses = JSON.parse(localStorage.getItem('courses'))
        }else{
            courses = []
        }
        return courses
    }
    showCourseToLoad(){
        let coursels = this.getFromStorage()
        if(coursels == []){
            return
        }else{
        coursels.forEach(infoCard => {
            $('.shop-hover table tbody').append(`
            <tr class="tr-infocard">
                <td><img src="${infoCard.image}" class="table-img"></td>
                <td class="title">${infoCard.title}</td>
                <td>${infoCard.price}</td>
                <td><a href="" class="btn-shop"><i class="tf-ion-android-close"></i></a></td>
            </tr>
            `)
        });
    }
        this.removeShop()
    }
}

// validate modal
class Cobra{
    activebtn(){
        if ($('#input-user').val().length > 0 && $('#input-pass').val().length > 0 && $('#input-email').val().length > 0 ) {
            let inputEmail = document.querySelector('#input-email').value
            if (inputEmail.includes('@')) {
                $('.form-parent form button').removeClass('disabled');
            }else{
                $('.form-parent form button').addClass('disabled');
            }
        }else{
            $('.form-parent form button').addClass('disabled');
        }
    }
}
