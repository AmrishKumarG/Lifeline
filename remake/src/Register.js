import React, { Component } from 'react'
import log from "./viedo/log.mp4";
import firebase from 'firebase';
import { Link, Redirect } from 'react-router-dom';
import './Register.css';

export class Register extends Component {
    constructor(props){
        super(props);
        this.authlisten=this.authlisten.bind(this);
        this.addval=this.addval.bind(this);
        this.state={
            Name:'',
            Email:'',
            Password:'',
            Blood:'',
            Address:'',
            Phone:'',
            city:'',
            islogged:false
        };
    }
    componentWillMount(){
        this.authlisten();
    }
    
    authlisten(){
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.state.islogged=true;
            }
            else{
                this.state.islogged=false;
                setTimeout(100) ;
            }
    });
    }
    registermyacc = e =>{
        if(!this.islogged){
            e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.Email, this.state.Password).then((user)=>{
            this.authlisten();
            this.addval();
            this.setState({[this.state.islogged]:true});
        }).catch(function(error) {
            alert(error);
          });
        }
    }
    
    addval(){
            let user=firebase.auth().currentUser;
            if(user){
                firebase.database().ref(user.uid).set({
                    Name:this.state.Name,
                    Email:this.state.Email,
                    Address:this.state.Address,
                    Blood:this.state.Blood,
                    Phone:this.state.Phone,
                    city:this.state.city
                    });
                    this.islogged=true;
        }
        else{
            alert("not yyet");
        }
    }
    render() {
        return (<div>{this.islogged?<Redirect push to="/bloodbrowser"/>:
            <div>
                 <video autoPlay muted loop width="100%" height="100%" className="lovi"
               style={{position:"absolute",
               width:"100%",
               left:"50%",
               top:"50%",
               bottom:"0%",
               height:"200%",
               objectFit:"cover",
               transform:"translate(-50%,-50%)",
               zIndex:"-1"}}>
                    <source src={log} type="video/mp4"/>                  
                </video>
                <a href="/"><img src="logo.png" className="wi21"></img></a>
                    <div className="overlayr"></div>
               
                <div className="bottle1">
                
                 <div className="title1">
                    <h1 className="vasi1">Registration Form</h1>
                    </div>
                    <div className="formr">
                    
                <div className="fieldr">
                    <div className="bigil">
                    <i class="fas fa-user"></i>
                    </div>      
                    <input type="text" placeholder="Name" className="kk" required onChange={e =>this.setState({Name:e.target.value})}></input> <br></br>   
                    <div className="bigil">
                    <i class="fas fa-envelope"></i>
                    </div>   
                    <input type="email" placeholder="Email-ID" className="kk" required onChange={e =>this.setState({Email:e.target.value})}></input><br></br>
                    <div className="bigil">
                    <i className="fas fa-lock"></i>
                    </div>
                    <input type="password" placeholder="Password" className="kk" required onChange={e =>this.setState({Password:e.target.value})}></input><br></br>
                    <div className="bigil">
                    <i class="fas fa-mobile-alt"></i>
                    </div>
                    <input type="phone" placeholder="Mobile Number" className="kk" required onChange={e =>this.setState({Phone:e.target.value})}></input><br></br>
                    <div className="bigils">
                    <i class="fas fa-tint"></i>
                    </div>
           <select name="blood type" className="bms1" required onChange={e =>this.setState({Blood:e.target.value})}>
            <option value="">Blood</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="A1+">A1+</option>
            <option value="A1-">A1-</option>
            <option value="A1B+">A1B+</option>
            <option value="A1B-">A1B-</option>
            <option value="A2+">A2+</option>
            <option value="A2-">A2-</option>
            <option value="A2B+">A2B+</option>
            <option value="A2B-">A2B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="Bombay Blood Group">Bombay Blood Group</option>
            <option value="INRA">INRA</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select><br></br>
          <div className="bigilss1">
          <i class="fas fa-address-card"></i>
          </div>
            <textarea class="textarea" placeholder="Address" required onChange={e =>this.setState({Address:e.target.value})}></textarea><br></br>
            <div className="bigilssss">
            <i class="fas fa-map-marker-alt"></i>
            </div>
          <select name="city"className="bmws1" required onChange={e =>this.setState({city:e.target.value})}>
<option value="">  City</option>
<option value="Agra">Agra</option>
<option value="hmedabad">hmedabad</option>
<option value="Ahmednagar">Ahmednagar</option>
<option value="Aizawal">Aizawal</option>
<option value="Ajmer">Ajmer</option>
<option value="Akola">Akola</option>
<option value="Alapuzzha">Alapuzzha</option>
<option value="Aligarh">Aligarh</option>
<option value="Allahabad">Allahabad</option>
<option value="Almora">Almora</option>
<option value="log">log</option>
<option value="Alwar">Alwar</option>
<option value="Ambala">Ambala</option>
<option value="Ambedkarnagar">Ambedkarnagar</option>
<option value="Amravati">Amravati</option>
<option value="mrela">mrela</option>
<option value="Amritsar">Amritsar</option>
<option value="nand">nand</option>
<option value="Anantnag">Anantnag</option>
<option value="antpur">antpur</option>
<option value="Andaman">Andaman</option>
<option value="Angul">Angul</option>
<option value="Anooppur">Anooppur</option>
<option value="Araria">Araria</option>
<option value="Ashoknagar">Ashoknagar</option>
<option value="Aurangabad">Aurangabad</option>
<option value="Aurangabad">Aurangabad</option>
<option value="Azamgarh">Azamgarh</option>
<option value="Badakhshan">Badakhshan</option>
<option value="Badgan">Badgan</option>
<option value="Badghis">Badghis</option>
<option value="Badwani">Badwani</option>
<option value="Bageshwar">Bageshwar</option>
<option value="Baghlan">Baghlan</option>
<option value="Bagpat">Bagpat</option>
<option value="Bahraich">Bahraich</option>
<option value="Balaghat">Balaghat</option>
<option value="Balangir">Balangir</option>
<option value="Balasore">Balasore</option>
<option value="Balia">Balia</option>
<option value="Balkh">Balkh</option>
<option value="Balrampur">Balrampur</option>
<option value="Bamian">Bamian</option>
<option value="anaskantha">anaskantha</option>
<option value="Banda">Banda</option>
<option value="Bandra">Bandra</option>
<option value="Bangalore Rural">Bangalore Rural</option>
<option value="Bangalore Urban">Bangalore Urban</option>
<option value="Banka">Banka</option>
<option value="Bankura">Bankura</option>
<option value="Banswara">Banswara</option>
<option value="Barabanki">Barabanki</option>
<option value="Baramula">Baramula</option>
<option value="Baran">Baran</option>
<option value="Bardhaman">Bardhaman</option>
<option value="Bareilly">Bareilly</option>
<option value="Bargah">Bargah</option>
<option value="Barmer">Barmer</option>
<option value="arpeta">arpeta</option>
<option value="Bastar">Bastar</option>
<option value="Basti">Basti</option>
<option value="Beed">Beed</option>
<option value="Begusarai">Begusarai</option>
<option value="Belgaum">Belgaum</option>
<option value="Bellary">Bellary</option>
<option value="Berat">Berat</option>
<option value="Betul">Betul</option>
<option value="Bhabua">Bhabua</option>
<option value="Bhadoi">Bhadoi</option>
<option value="Bhadrak">Bhadrak</option>
<option value="Bhagalpur">Bhagalpur</option>
<option value="Bhandara">Bhandara</option>
<option value="Bharatpur">Bharatpur</option>
<option value="haruch">haruch</option>
<option value="Bhatinda">Bhatinda</option>
<option value="havnagar">havnagar</option>
<option value="Bhilwara">Bhilwara</option>
<option value="Bhind">Bhind</option>
<option value="Bhiwani">Bhiwani</option>
<option value="Bhojpur">Bhojpur</option>
<option value="Bhopal">Bhopal</option>
<option value="Bidar">Bidar</option>
<option value="Bijapur">Bijapur</option>
<option value="Bijnor">Bijnor</option>
<option value="Bikaner">Bikaner</option>
<option value="Bilaspur">Bilaspur</option>
<option value="Bilaspur">Bilaspur</option>
<option value="Birbhum">Birbhum</option>
<option value="Bishnupur">Bishnupur</option>
<option value="Bokaro">Bokaro</option>
<option value="omdila">omdila</option>
<option value="ongaigaon">ongaigaon</option>
<option value="Boudh">Boudh</option>
<option value="Budaun">Budaun</option>
<option value="Bulandshehar">Bulandshehar</option>
<option value="Buldhana">Buldhana</option>
<option value="Bulqizë">Bulqizë</option>
<option value="Bundi">Bundi</option>
<option value="Burhanpur">Burhanpur</option>
<option value="Buxar">Buxar</option>
<option value="achar">achar</option>
<option value="Cannanore">Cannanore</option>
<option value="Central">Central</option>
<option value="Chaibasa">Chaibasa</option>
<option value="Chamba">Chamba</option>
<option value="Chamoli">Chamoli</option>
<option value="Champawat">Champawat</option>
<option value="Champhai">Champhai</option>
<option value="Chamrajnagar">Chamrajnagar</option>
<option value="Chandauli">Chandauli</option>
<option value="Chandel">Chandel</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Chandrapur">Chandrapur</option>
<option value="hangalang">hangalang</option>
<option value="Chatra">Chatra</option>
<option value="Chennai">Chennai</option>
<option value="Chhattarpur">Chhattarpur</option>
<option value="Chhindwara">Chhindwara</option>
<option value="Chickmagalur">Chickmagalur</option>
<option value="Chimtipui District">Chimtipui District</option>
<option value="Chitradurga">Chitradurga</option>
<option value="hittor">hittor</option>
<option value="Chittorgarh">Chittorgarh</option>
<option value="Churachandpur">Churachandpur</option>
<option value="Churu">Churu</option>
<option value="Coimbotore">Coimbotore</option>
<option value="Coochbehar">Coochbehar</option>
<option value="Cuddalorei">Cuddalorei</option>
<option value="ddapah">ddapah</option>
<option value="Cuttak">Cuttak</option>
<option value="Dadra">Dadra</option>
<option value="ahod">ahod</option>
<option value="Dakshin Dinajpur">Dakshin Dinajpur</option>
<option value="Dakshina Kannada">Dakshina Kannada</option>
<option value="Dama">Dama</option>
<option value="Damoh">Damoh</option>
<option value="angs">angs</option>
<option value="Dantewada">Dantewada</option>
<option value="aporijo">aporijo</option>
<option value="arbhanga">arbhanga</option>
<option value="Darjeeling">Darjeeling</option>
<option value="arrang">arrang</option>
<option value="Datia">Datia</option>
<option value="Dausa">Dausa</option>
<option value="dilabad">dilabad</option>
<option value="Davanagare">Davanagare</option>
<option value="Dehradun">Dehradun</option>
<option value="Delvinë">Delvinë</option>
<option value="Deogarh">Deogarh</option>
<option value="Deoghar">Deoghar</option>
<option value="Deoria">Deoria</option>
<option value="Devoll">Devoll</option>
<option value="Dewas">Dewas</option>
<option value="Dhalai District">Dhalai District</option>
<option value="Dhamtari">Dhamtari</option>
<option value="Dhanbad">Dhanbad</option>
<option value="Dhar">Dhar</option>
<option value="Dharmapuri">Dharmapuri</option>
<option value="Dharwad">Dharwad</option>
<option value="hemaji">hemaji</option>
<option value="Dhenkanal">Dhenkanal</option>
<option value="Dholpur">Dholpur</option>
<option value="hubri">hubri</option>
<option value="Dhule">Dhule</option>
<option value="iban Valley">iban Valley</option>
<option value="ibang Valley">ibang Valley</option>
<option value="Dibër">Dibër</option>
<option value="ibrugarh">ibrugarh</option>
<option value="Dimapur">Dimapur</option>
<option value="Dindigul">Dindigul</option>
<option value="Dindori">Dindori</option>
<option value="Diu">Diu</option>
<option value="Doda">Doda</option>
<option value="Dumka">Dumka</option>
<option value="Dungarpur">Dungarpur</option>
<option value="Durg">Durg</option>
<option value="Durrës">Durrës</option>
<option value="East">East</option>
<option value="East Champaran">East Champaran</option>
<option value="East Garo Hill">East Garo Hill</option>
<option value="ast Godavari">ast Godavari</option>
<option value="ast Kameng Seppa">ast Kameng Seppa</option>
<option value="East Khasi Hill">East Khasi Hill</option>
<option value="ast Siang">ast Siang</option>
<option value="Elbasan">Elbasan</option>
<option value="Ernakulam">Ernakulam</option>
<option value="Erode">Erode</option>
<option value="Etah">Etah</option>
<option value="Etawah">Etawah</option>
<option value="Faizabad">Faizabad</option>
<option value="Farah">Farah</option>
<option value="Faridabad">Faridabad</option>
<option value="Faridkot">Faridkot</option>
<option value="Farrukhabad">Farrukhabad</option>
<option value="Faryab">Faryab</option>
<option value="Fatehabad">Fatehabad</option>
<option value="Fatehgarh Saheb">Fatehgarh Saheb</option>
<option value="Fatehpur">Fatehpur</option>
<option value="Ferozepur">Ferozepur</option>
<option value="Fier">Fier</option>
<option value="Firozabad">Firozabad</option>
<option value="Gadak">Gadak</option>
<option value="Gadchiroli">Gadchiroli</option>
<option value="Gajapati">Gajapati</option>
<option value="andhinagar">andhinagar</option>
<option value="Ganganagar">Ganganagar</option>
<option value="Ganjam">Ganjam</option>
<option value="Garhwa">Garhwa</option>
<option value="Garhwal">Garhwal</option>
<option value="Gautam Bodda Nagar">Gautam Bodda Nagar</option>
<option value="aya">aya</option>
<option value="Gazipur">Gazipur</option>
<option value="Ghaziabad">Ghaziabad</option>
<option value="Ghazni">Ghazni</option>
<option value="Ghowr">Ghowr</option>
<option value="Giridih">Giridih</option>
<option value="Gjirokastër">Gjirokastër</option>
<option value="oalpara">oalpara</option>
<option value="Godda">Godda</option>
<option value="olaghat">olaghat</option>
<option value="Gonda">Gonda</option>
<option value="Gondia">Gondia</option>
<option value="Gopalganj">Gopalganj</option>
<option value="Gorakpur">Gorakpur</option>
<option value="Gramsh">Gramsh</option>
<option value="Gulberga">Gulberga</option>
<option value="Gumla">Gumla</option>
<option value="Guna">Guna</option>
<option value="untur">untur</option>
<option value="Gurdaspur">Gurdaspur</option>
<option value="Gurgaon">Gurgaon</option>
<option value="Gwalior">Gwalior</option>
<option value="ailakandi">ailakandi</option>
<option value="Hamirpur">Hamirpur</option>
<option value="Hamirpur">Hamirpur</option>
<option value="Hanumangarh">Hanumangarh</option>
<option value="Harda">Harda</option>
<option value="Hardoi">Hardoi</option>
<option value="Haridwar">Haridwar</option>
<option value="Has">Has</option>
<option value="Hassan">Hassan</option>
<option value="Haveri">Haveri</option>
<option value="Hazaribagh">Hazaribagh</option>
<option value="Helmand">Helmand</option>
<option value="Herat">Herat</option>
<option value="Hingoli">Hingoli</option>
<option value="Hissar">Hissar</option>
<option value="Hooghly">Hooghly</option>
<option value="Hoshangabad">Hoshangabad</option>
<option value="Hosiarpur">Hosiarpur</option>
<option value="Howrah">Howrah</option>
<option value="yderabad Urban">yderabad Urban</option>
<option value="Idar">Idar</option>
<option value="Idukki">Idukki</option>
<option value="Imphal East">Imphal East</option>
<option value="Imphal West">Imphal West</option>
<option value="Indore">Indore</option>
<option value="tanagar">tanagar</option>
<option value="Jabalpur">Jabalpur</option>
<option value="Jagatsinghpur">Jagatsinghpur</option>
<option value="Jaintia Hill">Jaintia Hill</option>
<option value="Jaipur">Jaipur</option>
<option value="Jaisalmer">Jaisalmer</option>
<option value="Jajpur">Jajpur</option>
<option value="Jalandhar">Jalandhar</option>
<option value="Jalaun">Jalaun</option>
<option value="Jalgaon">Jalgaon</option>
<option value="Jalna">Jalna</option>
<option value="Jalor">Jalor</option>
<option value="Jalpaiguri">Jalpaiguri</option>
<option value="Jammu">Jammu</option>
<option value="Jammu">Jammu</option>
<option value="amnagar">amnagar</option>
<option value="Jamshedpur">Jamshedpur</option>
<option value="Jamtara">Jamtara</option>
<option value="Jamui">Jamui</option>
<option value="Janjgir-Champa">Janjgir-Champa</option>
<option value="Jashpur">Jashpur</option>
<option value="Jaunpur">Jaunpur</option>
<option value="ehanabad">ehanabad</option>
<option value="Jhabua">Jhabua</option>
<option value="Jhalawar">Jhalawar</option>
<option value="Jhanjhar">Jhanjhar</option>
<option value="Jhansi">Jhansi</option>
<option value="Jharsuguda">Jharsuguda</option>
<option value="Jhunjhunu">Jhunjhunu</option>
<option value="Jind">Jind</option>
<option value="Jodhpur">Jodhpur</option>
<option value="orhat">orhat</option>
<option value="Jowzjan">Jowzjan</option>
<option value="unagadh">unagadh</option>
<option value="Jyotiba Phoole Nagar">Jyotiba Phoole Nagar</option>
<option value="Kabul">Kabul</option>
<option value="Kaithal">Kaithal</option>
<option value="Kalhandi">Kalhandi</option>
<option value="amrup">amrup</option>
<option value="Kancheepuram">Kancheepuram</option>
<option value="Kandahar">Kandahar</option>
<option value="Kangra">Kangra</option>
<option value="Kanker">Kanker</option>
<option value="Kanniyakumari">Kanniyakumari</option>
<option value="Kanooj">Kanooj</option>
<option value="Kanpur">Kanpur</option>
<option value="Kanpur Dehat">Kanpur Dehat</option>
<option value="Kapisa">Kapisa</option>
<option value="Kapurthala">Kapurthala</option>
<option value="Karauli">Karauli</option>
<option value="arbi-Anglong">arbi-Anglong</option>
<option value="Kargil">Kargil</option>
<option value="Karikal">Karikal</option>
<option value="rim Nagar">rim Nagar</option>
<option value="arimganj">arimganj</option>
<option value="Karnal">Karnal</option>
<option value="Karur">Karur</option>
<option value="Karwar">Karwar</option>
<option value="Kasaragod">Kasaragod</option>
<option value="Kathua">Kathua</option>
<option value="Katihar">Katihar</option>
<option value="Katni">Katni</option>
<option value="Kaushambi">Kaushambi</option>
<option value="Kavajë">Kavajë</option>
<option value="Kawardha">Kawardha</option>
<option value="Kendrapara">Kendrapara</option>
<option value="Keonjhar">Keonjhar</option>
<option value="Khagaria">Khagaria</option>
<option value="hammam">hammam</option>
<option value="Khandwa">Khandwa</option>
<option value="Khargone">Khargone</option>
<option value="heda">heda</option>
<option value="honsa">honsa</option>
<option value="Khurda">Khurda</option>
<option value="Kinnaur">Kinnaur</option>
<option value="Kishanganj">Kishanganj</option>
<option value="Koderma">Koderma</option>
<option value="Kohima">Kohima</option>
<option value="okrajhar">okrajhar</option>
<option value="Kolar">Kolar</option>
<option value="Kolasib">Kolasib</option>
<option value="Kolhpur">Kolhpur</option>
<option value="Kolonjë">Kolonjë</option>
<option value="Konar">Konar</option>
<option value="Kondoz">Kondoz</option>
<option value="Koppal">Koppal</option>
<option value="Koraput">Koraput</option>
<option value="Korba">Korba</option>
<option value="Korçë">Korçë</option>
<option value="Koriya">Koriya</option>
<option value="Kota">Kota</option>
<option value="Kottayam">Kottayam</option>
<option value="Kozhikode">Kozhikode</option>
<option value="rishna">rishna</option>
<option value="Krujë">Krujë</option>
<option value="Kuçovë">Kuçovë</option>
<option value="Kukës">Kukës</option>
<option value="Kullu">Kullu</option>
<option value="rnool">rnool</option>
<option value="Kurukshetra">Kurukshetra</option>
<option value="utch">utch</option>
<option value="Laç">Laç</option>
<option value="Laghman">Laghman</option>
<option value="Lahaul-Spiti">Lahaul-Spiti</option>
<option value="akhimpur">akhimpur</option>
<option value="Lakhimpur-Khedi">Lakhimpur-Khedi</option>
<option value="Lakhisarai">Lakhisarai</option>
<option value="Lakshdweep">Lakshdweep</option>
<option value="Lalitpur">Lalitpur</option>
<option value="Latehar">Latehar</option>
<option value="Latur">Latur</option>
<option value="Lawngtlai">Lawngtlai</option>
<option value="Leh">Leh</option>
<option value="Lezhë">Lezhë</option>
<option value="Librazhd">Librazhd</option>
<option value="Lohardaga">Lohardaga</option>
<option value="ohit">ohit</option>
<option value="ower Subansiri">ower Subansiri</option>
<option value="Lowgar">Lowgar</option>
<option value="Lucknow">Lucknow</option>
<option value="Ludhiana">Ludhiana</option>
<option value="Luglei District">Luglei District</option>
<option value="Lushnjë">Lushnjë</option>
<option value="Madhepura">Madhepura</option>
<option value="Madhubani">Madhubani</option>
<option value="Madikeri">Madikeri</option>
<option value="Madurai">Madurai</option>
<option value="Maha Maya Nagar">Maha Maya Nagar</option>
<option value="Maharajganj">Maharajganj</option>
<option value="Mahasamund">Mahasamund</option>
<option value="Mahe">Mahe</option>
<option value="Mahendragarh">Mahendragarh</option>
<option value="Mahoba">Mahoba</option>
<option value="Mainpuri">Mainpuri</option>
<option value="Malda">Malda</option>
<option value="Malësiae Madhe">Malësiae Madhe</option>
<option value="Malkangiri">Malkangiri</option>
<option value="Mallakastër">Mallakastër</option>
<option value="Mallapuram">Mallapuram</option>
<option value="Mamit">Mamit</option>
<option value="Mandi">Mandi</option>
<option value="Mandla">Mandla</option>
<option value="Mandsaur">Mandsaur</option>
<option value="Mandya">Mandya</option>
<option value="Mansa">Mansa</option>
<option value="Mat">Mat</option>
<option value="Mathura">Mathura</option>
<option value="Mau">Mau</option>
<option value="Mayurbhanj">Mayurbhanj</option>
<option value="edak">edak</option>
<option value="Medinipur">Medinipur</option>
<option value="Meerut">Meerut</option>
<option value="ehboobnagar">ehboobnagar</option>
<option value="ehsana">ehsana</option>
<option value="Mirditë">Mirditë</option>
<option value="Mirzapur">Mirzapur</option>
<option value="Moga">Moga</option>
<option value="Mokokchung">Mokokchung</option>
<option value="Mon">Mon</option>
<option value="Moradabad">Moradabad</option>
<option value="Morena">Morena</option>
<option value="origaon">origaon</option>
<option value="Muktsar">Muktsar</option>
<option value="Mumbai-City">Mumbai-City</option>
<option value="Munger">Munger</option>
<option value="Murshidabad">Murshidabad</option>
<option value="Muzaffar Nagar">Muzaffar Nagar</option>
<option value="uzaffarpur">uzaffarpur</option>
<option value="Mysore">Mysore</option>
<option value=".C.Hills">.C.Hills</option>
<option value="Nadia">Nadia</option>
<option value="agaon">agaon</option>
<option value="Nagapattinam">Nagapattinam</option>
<option value="Nagaur">Nagaur</option>
<option value="Nagpur">Nagpur</option>
<option value="Nainital">Nainital</option>
<option value="Nalanda">Nalanda</option>
<option value="albari">albari</option>
<option value="algonda">algonda</option>
<option value="Namakkal">Namakkal</option>
<option value="Nanded">Nanded</option>
<option value="Nandurbar">Nandurbar</option>
<option value="Nangrahar">Nangrahar</option>
<option value="armada">armada</option>
<option value="Narsinghpur">Narsinghpur</option>
<option value="Nashik">Nashik</option>
<option value="Navansahar">Navansahar</option>
<option value="Navapada">Navapada</option>
<option value="Navaragpur">Navaragpur</option>
<option value="avsari">avsari</option>
<option value="Nawada">Nawada</option>
<option value="Nayagarh">Nayagarh</option>
<option value="Neemuch">Neemuch</option>
<option value="llore">llore</option>
<option value="New Delhi">New Delhi</option>
<option value="Nicobar">Nicobar</option>
<option value="Nilgiris">Nilgiris</option>
<option value="Nimruz">Nimruz</option>
<option value="izamabad">izamabad</option>
<option value="North">North</option>
<option value="North">North</option>
<option value="North">North</option>
<option value="North 24 Parganas">North 24 Parganas</option>
<option value="North District">North District</option>
<option value="North East">North East</option>
<option value="North Goa">North Goa</option>
<option value="North West">North West</option>
<option value="Oraiyya">Oraiyya</option>
<option value="Oruzgan">Oruzgan</option>
<option value="Osmanabad">Osmanabad</option>
<option value="Other">Other</option>
<option value="Other">Other</option>
<option value="Padrauna">Padrauna</option>
<option value="Paktia">Paktia</option>
<option value="Paktika">Paktika</option>
<option value="Pakur">Pakur</option>
<option value="Palamu">Palamu</option>
<option value="Palghat">Palghat</option>
<option value="Pali">Pali</option>
<option value="Panchkula">Panchkula</option>
<option value="anchmahals">anchmahals</option>
<option value="Panipat">Panipat</option>
<option value="Panna">Panna</option>
<option value="Parbhani">Parbhani</option>
<option value="Parwan">Parwan</option>
<option value="atan">atan</option>
<option value="Pathanamthitta">Pathanamthitta</option>
<option value="Patiala">Patiala</option>
<option value="atna">atna</option>
<option value="Peqin">Peqin</option>
<option value="Perambalur">Perambalur</option>
<option value="Përmet">Përmet</option>
<option value="Phek">Phek</option>
<option value="Phulbani">Phulbani</option>
<option value="Pilibhit">Pilibhit</option>
<option value="Pitoragarh">Pitoragarh</option>
<option value="Pogradec">Pogradec</option>
<option value="Pondicherry">Pondicherry</option>
<option value="Poonch">Poonch</option>
<option value="orbander">orbander</option>
<option value="rakasam">rakasam</option>
<option value="Pratapgarh">Pratapgarh</option>
<option value="Pudukkottai">Pudukkottai</option>
<option value="Pukë">Pukë</option>
<option value="Pulwama">Pulwama</option>
<option value="Pune">Pune</option>
<option value="Puri">Puri</option>
<option value="urnea">urnea</option>
<option value="Purulia">Purulia</option>
<option value="Quilon">Quilon</option>
<option value="Raebareili">Raebareili</option>
<option value="Raichur">Raichur</option>
<option value="Raigad">Raigad</option>
<option value="Raigarh">Raigarh</option>
<option value="Raipur">Raipur</option>
<option value="Raisen">Raisen</option>
<option value="Rajauri">Rajauri</option>
<option value="Rajgarh">Rajgarh</option>
<option value="ajkot">ajkot</option>
<option value="Rajnandgaon">Rajnandgaon</option>
<option value="Rajsamand">Rajsamand</option>
<option value="Ramanathapuram">Ramanathapuram</option>
<option value="Rampur">Rampur</option>
<option value="Ranchi">Ranchi</option>
<option value="anga Reddy">anga Reddy</option>
<option value="Ratlam">Ratlam</option>
<option value="Ratnagiri">Ratnagiri</option>
<option value="Rayagada">Rayagada</option>
<option value="Rewa">Rewa</option>
<option value="Rewari">Rewari</option>
<option value="Ri-Bhoi District">Ri-Bhoi District</option>
<option value="Rohtak">Rohtak</option>
<option value="Rohtas">Rohtas</option>
<option value="oin">oin</option>
<option value="Ropar">Ropar</option>
<option value="Rudraprayag">Rudraprayag</option>
<option value="abarkantha">abarkantha</option>
<option value="Sagar">Sagar</option>
<option value="Saharanpur">Saharanpur</option>
<option value="aharsa">aharsa</option>
<option value="Sahebganj">Sahebganj</option>
<option value="Salem">Salem</option>
<option value="Samangan">Samangan</option>
<option value="Samastipur">Samastipur</option>
<option value="Sambalpur">Sambalpur</option>
<option value="Sangli">Sangli</option>
<option value="Sangrur">Sangrur</option>
<option value="Sant Kabir Nagar">Sant Kabir Nagar</option>
<option value="Sar-e Pol">Sar-e Pol</option>
<option value="Saraikela">Saraikela</option>
<option value="aran">aran</option>
<option value="Sarandë">Sarandë</option>
<option value="Satara">Satara</option>
<option value="Satna">Satna</option>
<option value="Sawai Madhopur">Sawai Madhopur</option>
<option value="Sehore">Sehore</option>
<option value="Sekhpura">Sekhpura</option>
<option value="Senapati">Senapati</option>
<option value="Seohar">Seohar</option>
<option value="Seoni">Seoni</option>
<option value="Serchhip">Serchhip</option>
<option value="Shahdol">Shahdol</option>
<option value="Shahjahanpur">Shahjahanpur</option>
<option value="Shajapur">Shajapur</option>
<option value="Sheopur">Sheopur</option>
<option value="Shimla">Shimla</option>
<option value="Shimoga">Shimoga</option>
<option value="Shivpuri">Shivpuri</option>
<option value="Shkodër">Shkodër</option>
<option value="Sholapur">Sholapur</option>
<option value="Shooji Maharaj">Shooji Maharaj</option>
<option value="Shravati">Shravati</option>
<option value="ibsagar">ibsagar</option>
<option value="Siddharth Nagar">Siddharth Nagar</option>
<option value="Sikar">Sikar</option>
<option value="Siliguri">Siliguri</option>
<option value="Simdega">Simdega</option>
<option value="Sindi">Sindi</option>
<option value="Sindudurg">Sindudurg</option>
<option value="Sirmour">Sirmour</option>
<option value="Sirohi">Sirohi</option>
<option value="Sirsa">Sirsa</option>
<option value="Sitamarhi">Sitamarhi</option>
<option value="Sitapur">Sitapur</option>
<option value="Sivaganga">Sivaganga</option>
<option value="Siwan">Siwan</option>
<option value="Skrapar">Skrapar</option>
<option value="Solan">Solan</option>
<option value="Sonepur">Sonepur</option>
<option value="Sonipat">Sonipat</option>
<option value="onitpur">onitpur</option>
<option value="South">South</option>
<option value="South 24 Parganas">South 24 Parganas</option>
<option value="South District">South District</option>
<option value="South Garo Hills">South Garo Hills</option>
<option value="South Goa">South Goa</option>
<option value="South West">South West</option>
<option value="ikakulam">ikakulam</option>
<option value="Srinagar">Srinagar</option>
<option value="Sultanpur">Sultanpur</option>
<option value="Sunbhadra">Sunbhadra</option>
<option value="Sundergarh">Sundergarh</option>
<option value="Supaul">Supaul</option>
<option value="urat">urat</option>
<option value="urendranagar">urendranagar</option>
<option value="Surguja">Surguja</option>
<option value="Takhar">Takhar</option>
<option value="Tamenglong">Tamenglong</option>
<option value="awang">awang</option>
<option value="Tehri-Garhwal">Tehri-Garhwal</option>
<option value="Tepelenë">Tepelenë</option>
<option value="Thane">Thane</option>
<option value="Thanjavur">Thanjavur</option>
<option value="Theni">Theni</option>
<option value="Thoothkudi">Thoothkudi</option>
<option value="Thoubal">Thoubal</option>
<option value="Tikamgarh">Tikamgarh</option>
<option value="insukia">insukia</option>
<option value="Tiranë">Tiranë</option>
<option value="Tiruchiorappalli">Tiruchiorappalli</option>
<option value="Tirunelveli">Tirunelveli</option>
<option value="Tiruvallur">Tiruvallur</option>
<option value="Tiruvannamalai">Tiruvannamalai</option>
<option value="Tiruvarur">Tiruvarur</option>
<option value="Tonk">Tonk</option>
<option value="Trichur">Trichur</option>
<option value="Trivandrum">Trivandrum</option>
<option value="Tropojë">Tropojë</option>
<option value="Tuensang">Tuensang</option>
<option value="Tumkur">Tumkur</option>
<option value="Udaipur">Udaipur</option>
<option value="Udhampur">Udhampur</option>
<option value="Udhamsingh Nagar">Udhamsingh Nagar</option>
<option value="Udupi">Udupi</option>
<option value="Ujjain">Ujjain</option>
<option value="Ukhrul">Ukhrul</option>
<option value="Umaria">Umaria</option>
<option value="Una">Una</option>
<option value="Unnav">Unnav</option>
<option value="Uttar Dinajpur">Uttar Dinajpur</option>
<option value="Uttarkashi">Uttarkashi</option>
<option value="adodara">adodara</option>
<option value="Vaishali">Vaishali</option>
<option value="alsad">alsad</option>
<option value="Varanasi">Varanasi</option>
<option value="Vellore">Vellore</option>
<option value="Vidisha">Vidisha</option>
<option value="Villupuram">Villupuram</option>
<option value="Virudhunagar">Virudhunagar</option>
<option value="ishakapatnam">ishakapatnam</option>
<option value="izianagaram">izianagaram</option>
<option value="Vlorë">Vlorë</option>
<option value="arangal">arangal</option>
<option value="Wardak">Wardak</option>
<option value="Wardha">Wardha</option>
<option value="Washim">Washim</option>
<option value="Wayanad">Wayanad</option>
<option value="West">West</option>
<option value="West">West</option>
<option value="West Champaran">West Champaran</option>
<option value="West District">West District</option>
<option value="West Garo Hill">West Garo Hill</option>
<option value="st Godavari">st Godavari</option>
<option value="West Khasi Hi">West Khasi Hi</option>
<option value="Wokha">Wokha</option>
<option value="Yadgir">Yadgir</option>
<option value="Yaman">Yaman</option>
<option value="Yamunanagar">Yamunanagar</option>
<option value="Yavatmal">Yavatmal</option>
<option value="Zabol">Zabol</option>
<option value="Zunheboto">Zunheboto</option>
</select><br></br><br></br>
<div className="fi1">
<Link to="/bloodbrowser" style={{textDecoration:'none'}}><input type="submit" value="Register" className="btns1" onClick={this.registermyacc}></input></Link><br></br>
    </div>
<div className="sigs1">
   <p>Already have an account? <Link to="/login" style={{textDecoration:'none',color:'yellow'}}>Login Now</Link></p>
</div>
</div>    
</div>
    </div>
            </div>
                }</div>
                )
        }
    }
    

export default Register
