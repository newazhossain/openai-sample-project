import { Component } from '@angular/core';
import { OpenaiApiService } from './services/openai-api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'openai-sample-project';

    prompt = '';
    generatedCode = '';

    constructor(private openaiApiService: OpenaiApiService) { }

    generateCode(): void {
        const maxTokens = 100;
        this.openaiApiService.generateCode(this.prompt, maxTokens).subscribe(response => {
        this.generatedCode = response?.choices[0]?.text;
        });
    }
}
