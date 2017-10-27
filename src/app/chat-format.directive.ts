import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appChatFormat]'
})
export class ChatFormatDirective {
  constructor(private el: ElementRef) { }
  @Input('words') words;
  
  @HostListener('keyup') onkeyUp() {
    let msg: any = this.el.nativeElement.value;
    for (let w in this.words) {
      let word = this.words[w];
      let response = msg.split(' ').some(function(w){return w.toLowerCase() === word});
      if(response) {
        let newMsg = msg.split(" ").slice(0, -1).join(" ");
        this.el.nativeElement.value = newMsg;
        alert(word+" is not allowed, Please use this chat app");
      }
    }
    
  }
}
