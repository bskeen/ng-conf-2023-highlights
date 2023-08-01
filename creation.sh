npx create-nx-workspace@latest --name=time-tracker --appName=time-tracker --preset=angular-monorepo --style=scss --standaloneApi=false --routing=true --nxCloud=false

cd time-tracker

cd apps

rmdir /Q /S time-tracker-e2e

rm -R time-tracker-e2e

cd ..

npm install -D @nx/storybook

nx g @nx/angular:storybook-configuration time-tracker --generateStories=true --configureCypress=true --generateCypressSpecs=true --configureStaticServe=true

npm install --save-dev @compodoc/compodoc

# Follow instructions at https://nx.dev/packages/storybook/documents/angular-storybook-compodoc

# To run: nx storybook time-tracker
# To add more stories: nx g @nx/angular:stories --project=time-tracker

npm install @angular/material@latest

npx nx g @angular/material:ng-add --project=time-tracker --theme=custom --typography=true --animations=enabled

npx nx g @angular/material:navigation --project=time-tracker navigation --style=scss

nx g @nx/angular:ngrx-root-store time-tracker --facade=false

nx g @nx/angular:component login --project=time-tracker

nx g @nx/angular:lib view-status
