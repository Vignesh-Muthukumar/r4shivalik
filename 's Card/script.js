

    const data = {
        logo: 'null',
      coverImage: 'blob:https://r4digitalbusinesscard.netlify.app/d33f2593-3818-4334-bd7a-6b5dd8b8f700',
      profile: 'blob:https://r4digitalbusinesscard.netlify.app/82972f74-327e-4141-9be5-52b02bd3a4d0',
      fullname: ['','',',,  '],
      userGender: ``,
      job: ``,
      businessName: `Shiwalik Corp`,
      businessAddress:` Ashirwad Building,

13/5, 3rd Floor, Snehlataganj

INDORE - 452003 ( M.P )`,
      businessDescription: `Shiwalik Corp was created in 2020 to serve the needs of construction businesses and home improvement professionals - and, of course, amateur enthusiasts. Since then, our client base has grown to include large multinational corporations, rural farmers, and everything in between. If you would like to find out more about how Shiwalik Corp can serve your construction and industrial equipment needs, get in touch today.Shiwalik Corp was created in 2020 to serve the needs of construction businesses and home improvement professionals - and, of course, amateur enthusiasts. Since then, our client base has grown to include large multinational corporations, rural farmers, and everything in between. If you would like to find out more about how Shiwalik Corp can serve your construction and industrial equipment needs, get in touch today.`,
      Primary: {
						Details:[
								{
									name:'Mobile',
									icon:'assets/icons/svg%3e',
									url:'tel:',
									value:'919977236899'
								}
,
								{
									name:'Website',
									icon:'assets/icons/svg%3e',
									url:'undefined',
									value:'/www.shiwalikcorp.com'
								}
,
								{
									name:'Email',
									icon:'assets/icons/svg%3e',
									url:'mailto:',
									value:'shiwalik.corp@gmail.com'
								}
,
								{
									name:'LinkedIn',
									icon:'assets/icons/svg%3e',
									url:'https://linkedin.com/',
									value:'https://www.linkedin.com/company/101649306/admin/feed/posts/'
								}
,
								{
									name:'Instagram',
									icon:'assets/icons/svg%3e',
									url:'undefined',
									value:'https://www.instagram.com/shiwalikcorp_2005/'
								}
]
},
      theme: `theme6`,
        sections: [
								{
									id:1,
									title:'',
									media:[
								{
										type:'image/png',
										url:'blob:https://r4digitalbusinesscard.netlify.app/316febcc-fc86-42e9-bcea-a048bc590540',
										size:7914854,
										name:'Shiwalik Corp.png',
								}
],
									embedCode:[],
									products:[],
									text:[],
								}]
          
        
      };
      const username = data.fullname
      function createMediaRenderer(fileUrl, fileType, name) {
        const container = document.createElement('div');
        container.className = 'media-files w-full shadow-lg rounded-lg flex flex-col gap-1'

        switch (fileType) {
          case 'application/pdf':
            const pdfContainer = document.createElement('div');
            pdfContainer.className = 'pdf-container flex flex-col border-[1px] border-slate-200 rounded-lg items-center w-full p-4';
      
            const pdfPreview = document.createElement('div');
            pdfPreview.className = 'pdf-preview overflow-hidden h-[10rem] max-w-[400px] w-full';
            pdfContainer.appendChild(pdfPreview);
      
            const loadingTask = pdfjsLib.getDocument(fileUrl);
            loadingTask.promise.then(function(pdf) {
              pdf.getPage(1).then(function(page) {
                const scale = 1.5;
                const viewport = page.getViewport({ scale: scale });
      
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                pdfPreview.appendChild(canvas);
      
                const renderContext = {
                  canvasContext: context,
                  viewport: viewport
                };
                page.render(renderContext);
              });
            });
      
            const pdfInfo = document.createElement('div');
            pdfInfo.className = 'pdf-info flex justify-between flex-col gap-5 w-[90%] p-5 items-center';
            const pdfName = document.createElement('p');
            pdfName.className = 'text-black p-4 font-mono font-semibold text-lg w-[100%] break-words text-center'
            pdfName.innerHTML = name;
            pdfContainer.appendChild(pdfName);

            pdfInfo.innerHTML = `<a href=${fileUrl} download=${name} class="btn download-btn bg-pink-300 hover:scale-[1.15] p-4 rounded-full w-[3.5rem] "><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg></a>`;
            pdfContainer.appendChild(pdfInfo);

            container.appendChild(pdfContainer);
            break;
      
          case 'video/mp4':
            const videoContainer = document.createElement('div');
            videoContainer.className = 'video-container flex flex-col border-[1px] border-slate-200 rounded-lg items-center w-full p-4';
      
            const videoPreview = document.createElement('video');
            videoPreview.controls = true;
            videoPreview.src = fileUrl;
            videoPreview.className = 'video-preview w-full h-[20rem]';
            videoContainer.appendChild(videoPreview);
      
            
            const videoName = document.createElement('p');
            videoName.className = 'text-black p-4 font-mono font-semibold text-lg w-[100%] break-words text-center'
            videoName.innerHTML = name

            videoContainer.appendChild(videoName);
            container.appendChild(videoContainer);
            break;
      
          case 'audio/mpeg':
            const audioContainer = document.createElement('div');
            audioContainer.className = 'audio-container flex flex-col border-[1px] border-slate-200 rounded-lg items-center w-full p-4';
      
            const audioPreview = document.createElement('audio');
            audioPreview.controls = true;
            audioPreview.src = fileUrl;
            audioPreview.className = 'audio-preview w-full rounded-3xl ring ';
            audioContainer.appendChild(audioPreview);
      
            
            const audioName = document.createElement('p');
            audioName.className = 'text-black p-4 font-mono font-semibold text-lg w-[100%] break-words text-center'
            audioName.innerHTML = name

            audioContainer.appendChild(audioName);
            
      
            container.appendChild(audioContainer);
            break;
      
          case 'image/jpeg':
          case 'image/png':
          case 'image/gif':
          case 'image/svg+xml':
            const imageContainer = document.createElement('div');
            imageContainer.className = 'image-container flex flex-col gap-1 items-center';
      
            const imagePreview = document.createElement('img');
            imagePreview.src = fileUrl;
            imagePreview.className = 'image-preview w-full h-auto rounded-t-lg';
            const imageName = document.createElement('p');
            imageName.className = 'text-black p-4 font-mono font-semibold text-lg w-[100%] break-words text-center'
            imageName.innerHTML = name
            imageContainer.appendChild(imagePreview);
            imageContainer.appendChild(imageName)
      
            container.appendChild(imageContainer);
            break;
      
          default:
            container.innerHTML = '<div class="text-xl text-red-600 p-1">Unsupported file type</div>';
            break;
        }
      
        return container;
      }
      
      function createPreviewComponent({
        logo,
        coverImage,
        profile,
        fullname,
        userGender,
        job,
        businessName,
        businessAddress,
        businessDescription,
        Primary,
        theme,
        
      }) {
        const container = document.createElement('div');
        container.className = `preview-container ${theme}  h-full  main-container md:w-[100%]`;
      
        
      
        const innerContainer = document.createElement('div');
        innerContainer.className = 'container w-full h-full background bg-slate-100 overflow-y-scroll scrollbar-hide main-page';
      
        const coverContainer = document.createElement('div');
        coverContainer.className = `w-full bg-teal-600 h-[15rem] flex justify-center relative cover-picture ${data.profile ? 'mb-[5rem]' : 'mb-3'}`;
      
        if (coverImage) {
          const coverdiv = document.createElement('div');
          coverdiv.className = 'w-full cover-div object-cover'
          const coverImg = document.createElement('img');
          coverImg.src = 'assets/images/coverImage.png';
          coverImg.alt = 'Cover Image';
          coverImg.className = 'w-full cover-image h-full';
          const blurdiv = document.createElement('div');
          blurdiv.className = 'hidden cover-blur';
          coverdiv.appendChild(coverImg);
          coverdiv.appendChild(blurdiv);
          coverContainer.appendChild(coverdiv);
        }
      
        if (logo) {
          const logodiv = document.createElement('div');
          logodiv.className = 'logo-div flex w-[6rem] absolute translate-x-2 translate-y-[100%] ';
          const logoImg = document.createElement('img');
          logoImg.src = 'assets/images/logo.png';
          logoImg.alt = 'logo';
          logoImg.className = 'w-[5rem] absolute translate-x-0 logo-image translate-y-[100%] logo-image';
          coverContainer.appendChild(logoImg);
          const logoname = document.createElement('p');
          logoname.className = 'hidden logo-name';
          logoname.innerHTML = data.businessName;
          logodiv.appendChild(logoImg)
          logodiv.appendChild(logoname)
          coverContainer.appendChild(logodiv);
          coverContainer.appendChild(logoImg);
        }
      
        if (profile) {
          const profileImg = document.createElement('img');
          profileImg.src ='assets/images/profile.png';
          profileImg.alt = 'profile';
          profileImg.className = 'w-[8rem] profile-pic-1 rounded-[50%] absolute translate-x-0 translate-y-[140%] ring ring-white';
          coverContainer.appendChild(profileImg);
        }
        
        if(coverImage){
          const tiltdiv = document.createElement('div');
          tiltdiv.className = 'hidden tilt w-full'
          coverContainer.appendChild(tiltdiv)
        }
          
         innerContainer.appendChild(coverContainer);
         
        if(profile || data.fullname){
          const profilediv2 = document.createElement('div');
          profilediv2.className = 'profile-div-2  hidden'
          const profilediv21 = document.createElement('div')
          if(profile){
            profilediv21.innerHTML=`<img src= 'assets/images/profile.png ' alt='profile' class='w-[8rem] profile-pic rounded-l-[20px]'}></img>`
            profilediv2.appendChild(profilediv21);
          }
          const profilediv22 = document.createElement('div');
          profilediv22.className = 'flex flex-col gap-1 items-start p-2 justify-center'
            const profilediv2h1 = document.createElement('h1');
            profilediv2h1.className = 'text-2xl font-bold font-sans Name text-white capitalize'
            profilediv2h1.innerHTML = username[0] + " " + username[1];
            profilediv22.appendChild(profilediv2h1)
            if(data.userGender){
            const profilediv2p1 = document.createElement('p');
            profilediv2p1.className ='text-slate-300 gender text-[14px] capitalize'
            profilediv2p1.innerHTML = data.userGender;
            profilediv22.appendChild(profilediv2p1)
            }
            if(data.job){
            const profilediv2p2 = document.createElement('p')
            profilediv2p2.className ='text-slate-100 font-semibold capitalize job-title Capitalize text-[16px]  text-center'
            profilediv2p2.innerHTML = data.job;
            profilediv22.appendChild(profilediv2p2);
            }
            if(data.businessName){
            const profilediv2p3 = document.createElement('p')
            profilediv2p3.className ='text-slate-200  capitalize  text-[14px] businessname text-center'
            profilediv2p3.innerHTML = data.businessName;
            profilediv22.appendChild(profilediv2p3)
            }
            profilediv2.appendChild(profilediv22)
            innerContainer.appendChild(profilediv2)
        }

        
        if(data.fullname || data.userGender || data.job || data.businessName){
          const detailsdiv1 = document.createElement('div');
          detailsdiv1.className = 'flex-col gap-1 items-start p-2 justify-center  hidden details-div';
          const detailsdivh1 = document.createElement('h1');
          detailsdivh1.className ='text-2xl font-bold font-sans Name text-white capitalize ';
          detailsdivh1.innerHTML =username[0] + " " + username[1];
          detailsdiv1.appendChild(detailsdivh1);
          if(data.userGender){
            const detailsdivp = document.createElement('p');
          detailsdivp.className = 'text-slate-300 gender text-[14px] capitalize';
          detailsdivp.innerHTML = data.userGender;
          detailsdiv1.appendChild(detailsdivp);
          }
          const detailsdivjob = document.createElement('p');
          detailsdivjob.className = 'text-slate-100 font-semibold capitalize job-title Capitalize text-[16px]  text-center';
          detailsdivjob.innerHTML = data.job;
          detailsdiv1.appendChild(detailsdivjob);
          const detailsdivbname = document.createElement('p');
          detailsdivbname.className = 'text-slate-200  capitalize  text-[14px] businessname text-center';
          detailsdivbname.innerHTML = data.businessName;
          detailsdiv1.appendChild(detailsdivbname);
          innerContainer.appendChild(detailsdiv1)
        }

      
        const  infodiv = document.createElement('div');
    infodiv.className='w-full h-full flex flex-col items-center info-div';

    if(data.fullname || data.userGender || data.businessName || data.job || data.businessDescription || data.businessAddress){

        const detailsContainer = document.createElement('div');
        detailsContainer.className = 'details-container flex justify-center flex-col gap-1 contact-div w-full mt-10 ';
      
        const fullNameElem = document.createElement('h1');
        fullNameElem.className = 'fullname text-2xl font-bold font-sans  text-black text-center mt-10';
        fullNameElem.textContent = ` `;
        detailsContainer.appendChild(fullNameElem);
      
        const genderElem = document.createElement('h1');
        genderElem.className = 'gender text-slate-600 gender text-[14px] capitalize text-center';
        genderElem.textContent = ``;
        detailsContainer.appendChild(genderElem);
      
        const jobElem = document.createElement('h1');
        jobElem.className = 'job text-center text-slate-800 job-title Capitalize text-[16px] ';
        jobElem.textContent = ``;
        detailsContainer.appendChild(jobElem);
      
        const businessNameElem = document.createElement('h1');
        businessNameElem.className = 'business-name text-slate-700 text-[14px] businessname text-center';
        businessNameElem.textContent = `Shiwalik Corp`;
        detailsContainer.appendChild(businessNameElem);
      
        const businessAddressElem = document.createElement('h1');
        businessAddressElem.className = 'text-[16px] text-slate-500 business-address text-center';
        businessAddressElem.textContent = `Ashirwad Building,

13/5, 3rd Floor, Snehlataganj

INDORE - 452003 ( M.P )`;
        detailsContainer.appendChild(businessAddressElem);
      
        const businessDescElem = document.createElement('h1');
        businessDescElem.className = 'text-[14px] business-desc text-slate-600 mt-5 text-center break-words px-14 ';
        businessDescElem.textContent = `Shiwalik Corp was created in 2020 to serve the needs of construction businesses and home improvement professionals - and, of course, amateur enthusiasts. Since then, our client base has grown to include large multinational corporations, rural farmers, and everything in between. If you would like to find out more about how Shiwalik Corp can serve your construction and industrial equipment needs, get in touch today.Shiwalik Corp was created in 2020 to serve the needs of construction businesses and home improvement professionals - and, of course, amateur enthusiasts. Since then, our client base has grown to include large multinational corporations, rural farmers, and everything in between. If you would like to find out more about how Shiwalik Corp can serve your construction and industrial equipment needs, get in touch today.`;
        detailsContainer.appendChild(businessDescElem);

        const primaryAction = document.createElement('div');
        primaryAction.className='flex w-full items-center gap-12  p-[4rem] flex-wrap primary-action justify-center'

        
        const primaries = Primary.Details
        console.log(primaries)

        if(Primary.Details !== 0){
          primaries.forEach(action =>{
              const primarydiv = document.createElement('div')
              primarydiv.className ='flex primary-button flex-col'
              primarydiv.innerHTML = `<a href=${action.url ? action.url + action.value : action.value}><img class='w-[4.5rem] h-[4.5rem] rounded-full bg-violet-700 p-3 md:w-[3.5rem] md:h-[3.5rem] primary-icon' src=${action.icon}></img></a><p class='text-black text-center action-name'>${action.name}</p>`
              primaryAction.appendChild(primarydiv)
          })
        } 
        infodiv.appendChild(detailsContainer);
        infodiv.appendChild(primaryAction);

        if(data.businessDescription ||  data.businessName){
          const themecontact1 = document.createElement('div');
          themecontact1.className = 'theme1-contact  bg-slate-100 m-8 hidden shadow p-4 rounded-lg ';
          const contact1bname = document.createElement('p');
          contact1bname.className = 'text-orange-500  text-2xl font-bold  businessname capitalize text-center';
          contact1bname.innerHTML = data.businessName;
          themecontact1.appendChild(contact1bname);
          if(data.businessDescription){
            const desctop = document.createElement('p');
            desctop.className = 'text-orange-500 mt-4 font-semibold';
            desctop.innerHTML = 'Description:';
            themecontact1.appendChild(desctop)
          }
          const descpara = document.createElement('p');
          descpara.className = 'text-[14px] business-desc text-slate-600  w-[90%] break-words';
          descpara.innerHTML = data.businessDescription;
          themecontact1.appendChild(descpara);
          infodiv.appendChild(themecontact1);
          if(data.businessAddress){
            const addrtop = document.createElement('p');
            addrtop.className = 'text-orange-500 mt-4 font-semibold theme1addr';
            addrtop.innerHTML = 'Address:';
            themecontact1.appendChild(addrtop)
          }
          const descaddr = document.createElement('p');
          descaddr.className = 'text-[14px] business-desc text-slate-600  w-[90%] break-words theme1addr';
          descaddr.innerHTML = data.businessAddress;
          themecontact1.appendChild(descaddr);
          infodiv.appendChild(themecontact1)
        }

          if(data.businessAddress){
          const theme3contact = document.createElement('div');
          theme3contact.className = 'theme-contact3  mx-8 shadow rounded-lg p-5 hidden ';
          const contactHead = document.createElement('div');
          contactHead.className = 'Contact-head justify-center  gap-2 flex w-full items-center mb-3'
          const contactimg = document.createElement('img');
          contactimg.src = 'assets/icons/call.svg';
          contactimg.alt = 'contact-us'
          contactimg.className = 'w-[12%] p-2 bg-black border-[2px] border-slate-950 rounded-xl mb-3 text-white';
          const contactp = document.createElement('p');
          contactp.className = 'text-2xl font-bold  text-orange-500 contact-us';
          contactp.innerHTML = 'Contact Us';
          contactHead.appendChild(contactimg);
          contactHead.appendChild(contactp);
          theme3contact.appendChild(contactHead);

          if(primaries){
            const mainprimary = document.createElement('div');

            primaries.filter((data) => {
              return data.name === 'Mobile' || data.name === 'Email';
            }).forEach(function(data, index) {
              var wrapper = document.createElement('div');
              wrapper.className = 'flex theme3-wrapper gap-4';
              
              var link = document.createElement('a');
              link.href = data.url ? data.url + data.value : data.value;
          
              var contactInfo = document.createElement('div');
              contactInfo.className = 'flex flex-col contact-info';
          
              var label = document.createElement('p');
              label.className = 'text-orange-500 font-medium text-lg';
              label.innerHTML = data.name === 'Mobile' ? 'Call Us:' : 'Email Us:';
          
              var value = document.createElement('p');
              value.className = 'text-slate-900 text-md mb-5';
              value.innerHTML = data.value;
              wrapper.appendChild(link);
              contactInfo.appendChild(label);
              contactInfo.appendChild(value);
              wrapper.appendChild(contactInfo);
              mainprimary.appendChild(wrapper);
            
            });
              theme3contact.appendChild(mainprimary);
              
            if(businessAddress){
              const addrdiv = document.createElement('div');
              addrdiv.className = 'mx-4'
                addrdiv.innerHTML = `<p class='text-orange-500  mt-2 font-semibold businessadd3'>Address:</p>
                <p class='text-[14px] text-slate-600 font-normal business-address3 w-[90%] break-words text-start'>${data.businessAddress}</p>`
              theme3contact.appendChild(addrdiv);
            }
          }
          infodiv.appendChild(theme3contact)
        }  

        if (primaries.length !== 0){
          const theme4primary = document.createElement('div');
          theme4primary.className = 'flex w-full flex-col items-center gap-4 justify-around p-[2rem] flex-wrap primary-4 hidden'
          primaries.forEach(data => {
              const primarydata = document.createElement('div');
              primarydata.className = ' gap-4 px-4 py-3 w-full shadow primary-data items-center  rounded-lg '

              const primarylink = document.createElement('a');
              primarylink.href = data.url ? data.url + data.value : data.value;
              primarylink.className = 'flex w-full  gap-10 justify-around items-center'
             
              const iconvalue = document.createElement('div');
              iconvalue.className = 'flex gap-4 items-center icon-value ';

              const iconimg = document.createElement('img');
              iconimg.src = data.icon
              iconimg.className = 'w-[1rem] h-[1rem] md:w-[3rem] md:h-[3rem] primary-icon'

              const namevalue = document.createElement('div');
              namevalue.className = 'w-[70%]';
              namevalue.innerHTML =` <p class='text-black text-xl font-semibold'>${data.name}</p>
              <p class='text-slate-600 text-[12px] font-light overflow-hidden'>${data.value}</p>`

              const arrow = document.createElement('span');
              arrow.innerHTML = '→'

              
              iconvalue.appendChild(iconimg);
              iconvalue.appendChild(namevalue);
              primarylink.appendChild(iconvalue);
              primarylink.appendChild(arrow)
              primarydata.appendChild(primarylink)
              theme4primary.appendChild(primarydata);
          })
          
            infodiv.appendChild(theme4primary)
        }





        const filesSection = document.createElement('div');
        filesSection.className = 'files-section w-full px-8 py-5 flex justify-center items-center flex-col gap-5 ';
        
       
        const texts = data.sections[0].text
        
        if(texts.length !== 0 ){
          texts.forEach(text => {
            const textpara = document.createElement('p');
            textpara.className = 'text-black p-4 shadow-md rounded-3xl text-xl font-sans font-normal section-text';
            textpara.innerHTML = text.text;
            filesSection.appendChild(textpara)
          })
        }

        const products = data.sections[0].products
       

        if(products.length !== 0 ){
          products.forEach(product => {

            if(product.length !== 0){
              const productdiv = document.createElement('div')
              productdiv.className='product flex flex-col rounded-3xl shadow-xl'

              if(product.image){
                const prodimage = document.createElement('img');
                prodimage.src= product.image;
                prodimage.alt = product.name;
                prodimage.className = 'object-center rounded-t-3xl '
                productdiv.appendChild(prodimage);
              }
              if(product.name){
                const prodname = document.createElement('p');
                prodname.className='text-black p-4  font-bold text-2xl font-montserrat  capitalize border-t-[2px] border-slate-300 text-center'
                prodname.innerHTML = product.name
                productdiv.appendChild(prodname)
              }
              if(product.description){
                const proddesc = document.createElement('p');
                proddesc.className='text-slate-600 text-md p-2 w-[90%] break-words  self-center text-center'
                proddesc.innerHTML = product.description
                productdiv.appendChild(proddesc)
              }
              if(product.price || product.btnname){
                const pricediv = document.createElement('div')
                pricediv.className = 'flex justify-between p-4 '
                if(product.price){
                 const prodprice = document.createElement('p');
                prodprice.className='text-slate-600 text-lg font-bold py-4 px-6 product-price'
                prodprice.innerHTML = `$${product.price}`
                const prodbutton = document.createElement('a')
                prodbutton.href = product.link;
                prodbutton.className = 'bg-blue-700 text-white font-bold text-lg capitalize hover:bg-blue-600 px-6 py-4 rounded-2xl hover:ring ring-blue-400'
                prodbutton.innerHTML = product.btnname;
                pricediv.appendChild(prodprice);
                pricediv.appendChild(prodbutton)
                productdiv.appendChild(pricediv);
                } 
              }
              filesSection.appendChild(productdiv);
            }
              
          })
        }
        const medias = data.sections[0].media
        if (data.sections[0] && data.sections.length > 0) {
          medias.forEach((section) => {
            const fileContainer = createMediaRenderer(`assets/Pictures/${section.name}`, section.type, section.name);
            filesSection.appendChild(fileContainer);
          });
        }

        const embedCode = data.sections[0].embedCode
        
        if(embedCode.length !== 0 ){
          embedCode.forEach(code => {
            const codecontainer = document.createElement('iframe');
            codecontainer.className = 'w-[100%] h-[250px] text-black ring-4 p-2 rounded-lg embed-code';
            codecontainer.src= code.code;
            codecontainer.title = 'YouTube video player';
            codecontainer.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            codecontainer.allowFullscreen = true;
            filesSection.appendChild(codecontainer)

          })

        }
        infodiv.appendChild(filesSection);
      }
        innerContainer.appendChild(infodiv);
        container.appendChild(innerContainer);
      
        return container;
      }
      
      document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('preview-container').appendChild(createPreviewComponent(data));
      });
      
      