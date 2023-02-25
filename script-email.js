
//script to get all the users that email needs to be changed
var targetUserEmails=[]
var oldDomain="@abc.com"

var documents=db.Users.find({},{Email:1,_id:0});

for(var i=0;i<documents.length;i++){
	var userEmail= documents[i].Email;
	if(userEmail.indexOf(oldDomain) ==-1)
		continue;
	targetUserEmails.append(userEmail);
}







//script for updating all the target users with new domain


var newDomain="@xyz.com"

var targetUsers=db.Users.find({
Email: {$in : targetUsersEmails}
});

for(var i=0;i<targetUsers.length;i++){
	var user=targetUsers[i];
	var userId=user._id
	var email_without_domain= (user.Email).split("@")[0]
	var new_email= email_without_domain+newDomain;
	var new_norm_email=new_email.toUpperCase();
	
	db.Users.Update(
		{
		_id:userId
		},
		{
		$set:{
			Email:new_email,
			UserName: new_email,
			NormalizedEmail:new_norm_email,
			NormalizedUserName:new_norm_email
		}
	});
}

[
    deep.kakkad,
    adithya.murali,
    irfan,
    dharanidharan.s,
    jayaram.ramesh,
    abhinandan.singh,
    ankush.goyal,
    kiruba.vijayakumar,
    robin.tyagi,
    dani.vijay,
    rahul.pr,
    sathish.e,
    rajnish.singh,
    dhaval.vikamsey,
    arjun.sood,
    aniket,
    joseph.augustine,
    sudha.rangarajan,
    manoj.v,
    shankar.k,
    moulik.patel,
    meenakshi.g,
    harish.biyani,
    esakiraja.pm,
    sivadass.n,
    ruchira.nanda,
    pulkit.garg,
    victor.vincent,
    vibhor.mittal,
    sathyamoorthy.k,
    bandaru.ramadasu,
    vivekanandan.l,
    krish.sapra,
    harsh.mittal,
    premkumar.pedapati,
    jills.shah,
    dewang.sanghvi,
    priyanghadevi.m,
    dinakaran.santhanam,
    rajat.nanchahal,
    prateek.jaiswal,
    josephnirmal.v,
    krishna.g,
    sarath.bk,
    vivek.s,
    srinivasa.raghavan,
    vinod.d,
    arokia.prabha,
    harshit.mittal,
    dharmesh.r,
    ashish.sethi,
    sourabh.maheshwari,
    razik.fareed,
    shagun.jain,
    jeevanson.m];
