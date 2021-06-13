function logout()
{
	location.replace("../php/login.php")
}

function loaddata(data) 
{
    if (data == 'GR') 
    {
        document.getElementById("p1").innerHTML = "<ol><li>SILENCE is to be observed in the Library all the time. Noncompliance to this is an offence and liable to punishment upon withdrawal of the Library card(s). </li><br><li>Use of A MOBILE PHONE is NOT ALLOWED in the library. Users MUST switch off their mobile phones or set them in a silent tone. Usage of cell phones as well as ringing Cell phones will be confiscated and withdrawal of the Library card. </li><br><li>Library User Card(s) will be withdrawn from any person suspended from the Library. </li><br><li>Readers must leave their bags, brief cases, paper bags, etc. to the Cloak Room with the Staff at the library entrance who may issue one Card per item left with him/her at no cost. No person will be allowed to collect each others properties from the Library Cloak Room. </li><br><li>Users are advised not to keep valuable items in their bags or briefcases.</li><br><li>Wearing of jackets and hats are not allowed in the Library. </li><br><li>Smoking and consumption of food and drinks are forbidden in the Library.</li><br><li>Bottles of Ink may not be brought into the Library. </li><br><li>The reservation of seats in the Library is not permitted. Books and other materials left for any length of time on chairs and tables may be removed by the Library staff. Items left in the Library will be cleared away during the closing time. Removal and or shifting of chairs and tables is not allowed in the Library. </li><br><li>The Library Management accepts NO RESPONSIBILITY for personal belongings left in the Library. </li><br><li>Books picked and consulted from the OPEN shelves should be left on the desk/table after use.</li><br><li>Such books are not taken out of the library without proper charging and discharging procedures by Library Staff on duty. Such books may be carried to the Circulation Section for charging and officially. </li><br><li>An individual or Reader/Borrower is responsible for the Books borrowed by him or her and must therefore return the Books he/she borrowed; no borrower shall return borrowed books on behalf of a friend. </li><br><li>Books taken into the Library must be checked by the Library Security staff at the Library Entrance. No such books will be allowed in the Library without informing the Library security staff who may open for checking. </li><br><li>Reading between the shelves is prohibited because it interferes with the shelving and retrieval processes. </li><br></ol>";
    }
	else if (data == 'BR') 
    {
        document.getElementById("p1").innerHTML = "<ol><li>Here and elsewhere the term <b><i>BOOKS</i></b> is deemed to cover all types of Library OR Information materials. With the exception of certain categories below; all books may be borrowed from the Library. A separate Form/card must be filled in for each book borrowed. Completed forms/cards and books must be handed over to the Library Assistants at the issue desk for verifications before the books are taken out of the Library.</li><br></ol>";
    }
	else if (data == 'BP') 
    {
        document.getElementById("p1").innerHTML = "<ol><li>Each patron wanting to check items out from the Library must present their Library User card at one of the Circulation Desks for the items they wish to check out. The card presented must belong to the patron in question, and patrons may not impersonate others to circumvent circulation policy as prescribed in the Library Rule and Regulations.</li><br><li>Academic staff of the University may borrow up to 10 (TEN) volumes at a time for the Period of 15 days from the date of issue and only renewable once. The borrowed book may be taken again by the same person after two weeks from the date of renewal. This is with exception of reserved books. </li><br><li>Students of the AUCA may borrow up to 3 (THREE) volumes at a time for the Period of 5 (FIVE) days from the date of issue and only renewable once. </li><br><li>Administrative and the Technical staff of the AUCA may borrow up to 2 (TWO) Volumes at a time for the period of 1 (ONE) week renewable once. An external borrower from Institutions that have correlations with AUCA (those Within Rwanda) may have up to 2 (Two) volumes at any working time for the period of NOT more than 12 hours from the hour and date of issue and non-renewable.</li><br></ol>";
		}
	else if (data == 'EU') 
    {
        document.getElementById("p1").innerHTML = "<ol><li>The Library has two categories of Users i.e. External Users (those outside the University) and Internal Borrowers (those within the University). External borrowers may be those from Institutions that have no direct correlations/relationships with AUCA and as well as those from Institutions that have direct correlations/relationships with AUCA. </li><br><li>An external borrower from Institutions that have correlations with AUCA (those within Rwanda) may have up to 2 (Two) volumes at any working time for the period of NOT more than 12 hours from the hour and date of issue and non-renewable. </li><br><li>An External Borrower from Institutions that have no correlations with AUCA (those outside Rwanda) may be required upon registration with the Library, to pay a nonrefundable deposit fee of <b>Rs.12,000</b> per month. This category will be issued Library External User ID for the period of time registered for.</li><br></ol>";
    }
	else if (data == 'AE') 
    {
        document.getElementById("p1").innerHTML = "<ol><li>The Library has a 24/7 Internet service accessible through Hotspot both within and outside the Library Building. Users who may not have personal laptops can use the available Library Computers to access such Internet and other related academic research service. These are only for the registered Library Users who MUST have Library User Card. These are accessible from the e-Library at Gishushu Campus and Library Computer Lab at the main campus Masoro.</li><br><li>All Library users/patrons who expect to access Library computer services MUST adhere to the Rules or else will be ordered to leave the Library and face the disciplinary Committee for such unbecoming behavior and misconduct.</li><br><li>Upon entry into the e-Library at Gishushu Campus or Library Computer Lab at the main campus Masoro; you must fast register in the Library computer log book. One must register the computer number that he/she wants to use.</li><br><li>Only one Computer is allowed per person at a time. FACE BOOK, TWITTER, GAMES, MUSIC PLAYING, and none academic or research based activities are <b>STRICTLY NOT ALLOWED</b>. Any person found guilty of such will be ordered to leave or else face disciplinary actions.</li><br><li><b>DO NOT REMOVE OR REPLACE</b>  any peripheral device, power cables, Chairs, tables etc. without permission. <b> DO NOT INSTALL OR UNINSTALL</b> any software program(s).</li><br><li>Library computers are strictly for academics and other researches ONLY. One person is allowed to use one computer for <b>a maximum of one and half hours</b> ONLY. No sharing of computers. Booking of a specific computer number ahead of time may be allowed by the staff on duty or Lab Attendant and one must be allowed access to the Computer booked for that time.</li><br><li>All LAPTOPS owners MUST be in one designated place (Laptops Section). No user shall be allowed in the Library with a laptop outside the designated Laptop Section.</li><br><li>No user shall be allowed to plug in his or her peripheral devices.</li><br></ol>";

    }
}