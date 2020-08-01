import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { NgForm } from '@angular/forms'; 

import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-editar-tarefas',
  templateUrl: './editar-tarefas.component.html',
  styleUrls: ['./editar-tarefas.component.css']
})
export class EditarTarefasComponent implements OnInit {

  @ViewChild('formTarefa') formTarefa: NgForm;
  tarefa: Tarefa;
  constructor(
    private tarefaService: TarefaService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    const id =+ this.route.snapshot.params['id'];
    this.tarefa = this.tarefaService.buscaPorId(id);
    //console.log(this.tarefa);
  }

  atualizar(): void {
    if (this.formTarefa.form.valid) {
	    this.tarefaService.atualizar(this.tarefa);
	    this.router.navigate(['/tarefas']);
    }
  }
}
