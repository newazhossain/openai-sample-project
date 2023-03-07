import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OpenaiApiService {
    private apiEndpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions';
    private apiKey = ''; // set YOUR_API_KEY_HERE

    constructor(private http: HttpClient) { }

    generateCode(prompt: string, maxTokens: number): Observable<any> {

        if(this.apiKey === '') {
            alert('you did not set your open api key. Please check openai-api.service.ts file');
            return of(null);
        }
        
        const headers = new HttpHeaders().set('Content-Type', 'application/json')
                                        .set('Authorization', `Bearer ${this.apiKey}`);
        const body = { prompt, max_tokens: maxTokens };
        return this.http.post(this.apiEndpoint, body, { headers });
    }
}