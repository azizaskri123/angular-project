import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';
import { SuggestionRoutingModule } from './suggestion-routing.module';
import { SuggestionDetailsComponent } from './suggestion-details/suggestion-details.component'; // <-- ajouté

@NgModule({
  declarations: [
    ListSuggestionComponent,
    SuggestionDetailsComponent // <-- ajouté
  ],
  imports: [
    CommonModule,
    FormsModule,
    SuggestionRoutingModule
  ]
})
export class SuggestionModule {}
