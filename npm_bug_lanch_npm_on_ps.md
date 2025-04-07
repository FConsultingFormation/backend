npm : Impossible de charger le fichier C:\Program Files\nodejs\npm.ps1, car l’exécution de scripts est désactivée sur ce système. Pour plus d’informations, consultez about_Execution_Policies à l’adresse 
https://go.microsoft.com/fwlink/?LinkID=135170.
Au caractère Ligne:1 : 1
+ npm
+ ~~~
    + CategoryInfo          : Erreur de sécurité : (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess


    ##############################################################################################
    Solution
    ##############################################################################################

    Le message d'erreur indique que **PowerShell empêche l'exécution de scripts** pour des raisons de sécurité. Cela affecte `npm` car il essaie d'exécuter `npm.ps1`, mais PowerShell bloque son exécution.  

### 🚀 **Solution : Modifier la stratégie d'exécution de PowerShell**  
Tu peux ajuster la politique d'exécution avec la commande suivante :

1. **Ouvre PowerShell en mode Administrateur** :  
   - Tape `PowerShell` dans la barre de recherche Windows  
   - Clique droit > **Exécuter en tant qu'administrateur**  

2. **Autorise l'exécution des scripts avec la commande** :  
   ```powershell
   Set-ExecutionPolicy Unrestricted -Scope CurrentUser
   ```
   Puis confirme avec `O` (Oui) ou `A` (Oui pour tous).  

3. **Vérifie si npm fonctionne** en exécutant :  
   ```powershell
   npm -v
   ```

---

### 🔍 **Autre Solution (Utilisation de `cmd` au lieu de PowerShell)**
Si tu veux éviter de modifier la politique d'exécution de PowerShell, utilise simplement **l’invite de commandes classique (cmd)** :  
1. **Ouvre `cmd.exe`** (Windows + R → tape `cmd` → Entrée)  
2. Lance `npm` directement :  
   ```cmd
   npm -v
   ```

---

### 🔧 **Solution Alternative : Exécuter npm avec node.exe**  
Si le problème persiste, essaie d'exécuter `npm` comme ceci dans PowerShell :  
```powershell
node "C:\Program Files\nodejs\npm"
```

Dis-moi si ça résout ton problème ! 🚀