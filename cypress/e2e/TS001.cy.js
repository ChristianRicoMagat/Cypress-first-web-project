/// <reference types="cypress"/>

import { visitPage } from "./pages/visitPage.cy"
import { loginPage } from "./pages/loginPage.cy"
import { homePage } from "./pages/homePage.cy"
import { basicInfo } from "./pages/basicInfo.cy"
import { languagesPage } from "./pages/languagesPage.cy"

const VisitPage = new visitPage()
const LoginPage = new loginPage()
const HomePage = new homePage()
const BasicInfo = new basicInfo()
const LanguagesPage = new languagesPage()

describe('SUCCESSFUL PROFILE UPDATE OF A VALID USER', function () {

    //TC001 - Verify Successful Login using valid email and password

    it('TC001 - Verify Successful Login using valid email and password', function () {

        //Access the application URL
        VisitPage.myApp()

        //login with valid credentials
        LoginPage.enterEmail('christianrico.magat@gmail.com')
        LoginPage.clickContinue().click()
        LoginPage.enterPassword('!Aaaa12345')
        LoginPage.clickContinue().click()

        //Assertion: Verify user is directed to home page dashboard
        HomePage.returnToHome()

    })

    //TC002 - Verify if user can update contact information under Basic Info page

    it('TC002 - Verify if user can update contact information under Basic Info page', function () {

        VisitPage.myApp()

        //login with valid credentials
        LoginPage.enterEmail('christianrico.magat@gmail.com')
        LoginPage.clickContinue().click()
        LoginPage.enterPassword('!Aaaa12345')
        LoginPage.clickContinue().click()

        //Assertion: Verify user is directed to home page dashboard
        HomePage.returnToHome()

        //Click the user avatar
        HomePage.userAvatar().click()

        //Click My Profile
        HomePage.myProfile().click()
        //Assertion: User must be directed to basic information page

        //Click 'Edit Button' under 'Contact Info' Tab
        BasicInfo.editContactInfo().click()

        //Assertion: save button should be disabled prior updating any text fields
        BasicInfo.saveContactInfo().should('be.disabled')

        //Select, clear, and edit Last Name with random characters
        BasicInfo.editLastName().click().clear().type(userID_Alpha())

        //Loop function to generate random string
        function userID_Alpha() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

            for (var i = 0; i < 4; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        }

        //validate if 'save' button is enabled. If yes, click.
        BasicInfo.saveContactInfo().should('be.enabled').click()

        //Retun to Home
        //Assertion: Verify user is directed to home page dashboard
        HomePage.returnToHome()

    })

    //TC003 - Verify if user can update location information under 'Basic Info' page

    it('TC003 - Verify if user can update location information under Basic Info page', function () {

        VisitPage.myApp()

        //login with valid credentials
        LoginPage.enterEmail('christianrico.magat@gmail.com')
        LoginPage.clickContinue().click()
        LoginPage.enterPassword('!Aaaa12345')
        LoginPage.clickContinue().click()

        //Assertion: Verify user is directed to home page dashboard
        HomePage.returnToHome()

        //Click the user avatar
        HomePage.userAvatar().click()

        //Click My Profile
        HomePage.myProfile().click()
        //Assertion: User must be directed to basic information page

        //Click 'Edit Button' under 'Contact Info' Tab
        BasicInfo.editLocation().click()

        //Assertion: save button should be disabled prior updating any text fields
        BasicInfo.saveLocationInfo().should('be.disabled')

        //Select, clear, and edit Last Name with random characters
        BasicInfo.editPostalCode().click().clear().type(userID_Alpha())

        //Loop function to generate random string
        function userID_Alpha() {
            var text = "";
            var possible = "0123456789";

            for (var i = 0; i < 4; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        }

        //validate if 'save' button is enabled. If yes, click.
        BasicInfo.saveLocationInfo().should('be.enabled').click()

        //Retun to Home
        //Assertion: Verify user is directed to home page dashboard
        HomePage.returnToHome()

    })

    //TC004 - Verify if user can edit primary language preference under 'Languages' page

    it('TC004 - Verify if user can edit primary language preference under Languages page', function () {

        VisitPage.myApp()

        //login with valid credentials
        LoginPage.enterEmail('christianrico.magat@gmail.com')
        LoginPage.clickContinue().click()
        LoginPage.enterPassword('!Aaaa12345')
        LoginPage.clickContinue().click()

        //Assertion: Verify user is directed to home page dashboard
        HomePage.returnToHome()

        //Click the user avatar
        HomePage.userAvatar().click()

        //Click My Profile
        HomePage.myProfile().click()
        //Assertion: User must be directed to basic information page

        //LanguagesPage.languagesPage()
        LanguagesPage.languagesPage().click()

        //Assertion: User should be directed to Languages Page
        VisitPage.page_languages()

        //Edit primary Language
        LanguagesPage.editPrimaryLanguage().click()
        LanguagesPage.languageTextbox().click().type(randomLanguage())

        //function to randomly select a value from a static array
        function randomLanguage(langArray) {
            var langArray = ['Afa{enter}', 'Afr{enter}', 'Agh{enter}', 'Aka{enter}', 'alb{enter}', 'als{enter}', 'amh{enter}', 'ara{enter}', 'ben{enter}', 'bem{enter}', 'cro{enter}', 'cze{enter}', 'eng{enter}', 'chin{enter}', 'fre{enter}']
            return langArray[Math.floor(Math.random() * langArray.length)]
        }
        //Save new primary language
        LanguagesPage.savePrimaryLang().click()

        //Return to Home
        HomePage.returnToHome()


    })

    //TC005 - Verify if user can add other languages under 'Languages' page

    it('TC005 - Verify if user can add other languages under Languages page', function () {

        VisitPage.myApp()

        //login with valid credentials
        LoginPage.enterEmail('christianrico.magat@gmail.com')
        LoginPage.clickContinue().click()
        LoginPage.enterPassword('!Aaaa12345')
        LoginPage.clickContinue().click()

        //Assertion: Verify user is directed to home page dashboard
        HomePage.returnToHome()

        //Click the user avatar
        HomePage.userAvatar().click()

        //Click My Profile
        HomePage.myProfile().click()
        //Assertion: User must be directed to basic information page

        //LanguagesPage.languagesPage()
        LanguagesPage.languagesPage().click()

        //Assertion: User should be directed to Languages Page
        VisitPage.page_languages()

        //Add other languages
        LanguagesPage.addOtherLanguage().click()
        LanguagesPage.addLanguageTextbox().click().type(randomLanguage())

        //Function to randomly select a value from a static array
        function randomLanguage(langArray) {
            var langArray = ['Afa{enter}', 'Afr{enter}', 'Agh{enter}', 'Aka{enter}', 'alb{enter}', 'als{enter}', 'amh{enter}', 'ara{enter}', 'ben{enter}', 'bem{enter}', 'cro{enter}', 'cze{enter}', 'eng{enter}', 'chin{enter}', 'fre{enter}']
            return langArray[Math.floor(Math.random() * langArray.length)]
        }

        //Adding proficiency level
        LanguagesPage.addLanguageProficiencyTextbox().type(proficiencyLevel())

        function proficiencyLevel(level) {
            var level = ['Nat{enter}', 'Ful{enter}', 'Pro{enter}', 'Lim{enter}']
            return level[Math.floor(Math.random() * level.length)]
        }
        //Save preference
        LanguagesPage.saveOtherLang().click({ force: true })

        //Return to Home
        HomePage.returnToHome()
    })

    //TC006 - Verify if user can successfully sign out of the application after successful profile update

    it('TC006 - Verify if user can successfully sign out of the application after successful profile update', function () {

        VisitPage.myApp()

        //login with valid credentials
        LoginPage.enterEmail('christianrico.magat@gmail.com')
        LoginPage.clickContinue().click()
        LoginPage.enterPassword('!Aaaa12345')
        LoginPage.clickContinue().click()

        //Assertion: Verify user is directed to home page dashboard
        HomePage.returnToHome()

        //Click the user avatar
        HomePage.userAvatar().click()

        //Click My Profile
        HomePage.myProfile().click()
        //Assertion: User must be directed to basic information page

        BasicInfo.editContactInfo().click()

        //Assertion: save button should be disabled prior updating any text fields
        BasicInfo.saveContactInfo().should('be.disabled')

        //Select, clear, and edit Last Name with random characters
        BasicInfo.editLastName().click().clear().type(userID_Alpha())

        //Loop function to generate random string
        function userID_Alpha() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

            for (var i = 0; i < 4; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        }

        //validate if 'save' button is enabled. If yes, click.
        BasicInfo.saveContactInfo().should('be.enabled').click()

        //Click 'Edit Button' under 'Contact Info' Tab
        BasicInfo.editLocation().click()

        //Assertion: save button should be disabled prior updating any text fields
        BasicInfo.saveLocationInfo().should('be.disabled')

        //Select, clear, and edit Last Name with random characters
        BasicInfo.editPostalCode().click().clear().type(userID_Alpha())

        //Loop function to generate random string
        function userID_Alpha() {
            var text = "";
            var possible = "0123456789";

            for (var i = 0; i < 4; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        }

        //validate if 'save' button is enabled. If yes, click.
        BasicInfo.saveLocationInfo().should('be.enabled').click()

        //LanguagesPage.languagesPage()
        LanguagesPage.languagesPage().click()

        //Assertion: User should be directed to Languages Page
        VisitPage.page_languages()

        //Edit primary Language
        LanguagesPage.editPrimaryLanguage().click()
        LanguagesPage.languageTextbox().click().type(randomLanguage())

        //Save new primary language
        LanguagesPage.savePrimaryLang().click()
            
        //Add other languages
        LanguagesPage.addOtherLanguage().click()
        LanguagesPage.addLanguageTextbox().click().type(randomLanguage())

        //Function to randomly select a value from a static array
        function randomLanguage(langArray) {
            var langArray = ['Afa{enter}', 'Afr{enter}', 'Agh{enter}', 'Aka{enter}', 'alb{enter}', 'als{enter}', 'amh{enter}', 'ara{enter}', 'ben{enter}', 'bem{enter}', 'cro{enter}', 'cze{enter}', 'eng{enter}', 'chin{enter}', 'fre{enter}']
            return langArray[Math.floor(Math.random() * langArray.length)]
        }

        //Adding proficiency level
        LanguagesPage.addLanguageProficiencyTextbox().type(proficiencyLevel())

        function proficiencyLevel(level) {
            var level = ['Nat{enter}', 'Ful{enter}', 'Pro{enter}', 'Lim{enter}']
            return level[Math.floor(Math.random() * level.length)]
        }
        //Save preference
        LanguagesPage.saveOtherLang().click({ force: true })

        //Click the user avatar
        HomePage.userAvatar().click()
        HomePage.signOut().click()

        //Assertion: Validate user is directed to Telus log in page
        VisitPage.loginPage()


    })

})      
