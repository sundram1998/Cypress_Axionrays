#How to clone and run Cypress repo<br/>
Cloning a repository
On GitHub.com, navigate to the main page of the repository.

Above the list of files, click  Code.
![image](https://github.com/sundram1998/Cypress_Axionrays/assets/67402167/61a5f35d-cad8-4611-a496-7edb1cac8283)


Screenshot of the list of files on the landing page of a repository. The "Code" button is highlighted with a dark orange outline.

Copy the URL for the repository.

To clone the repository using HTTPS, under "HTTPS", click.

To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click SSH, then click.

To clone a repository using GitHub CLI, click GitHub CLI, then click.
![image](https://github.com/sundram1998/Cypress_Axionrays/assets/67402167/9705f29a-4c76-4725-a9db-bb3529bfb6a9)


Screenshot of the "Code" dropdown menu. To the right of the HTTPS URL for the repository, a copy icon is outlined in dark orange.

Open Git Bash.

Change the current working directory to the location where you want the cloned directory.

Type git clone, and then paste the URL you copied earlier.

git clone [https://github.com/YOUR-USERNAME/YOUR-REPOSITORY](https://github.com/sundram1998/Cypress_Axionrays.git)
Press Enter to create your local clone.

$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `Spoon-Knife`...
> Remote: Counting objects: 10, done.
> Remote: Compressing objects: 100% (8/8), done.
> remote: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.

#After Clone hit the command code . what will open vs code with cloned repo codes
> In the terminal hit cd Cypress_Axionrays and hit enter
> Then npm install
> Then npx cypress open


#E2E Folder<br/>
##cypress/e2e folder, earlier known as the integration folder, is the main folder to store all your test. We add the Basic, End to End Test, Visual, or Cucumber test here. We keep all our spec files here.<br/>
