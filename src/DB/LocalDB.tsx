import Usuario from '../interfaces/Usuario';

interface dbConfig{
    tableName: string
}

class LocalDB{
    private tableName;

    constructor( cfg:dbConfig ){
        this.tableName = cfg.tableName as string;
    }

    selectAll(): Array<Usuario>{
        let tableData:Array<Usuario> = JSON.parse(localStorage.getItem( this.tableName )!);
        return tableData;
    }

    find( conteudo:string ): Array<Usuario>{
        let registros = this.selectAll();
        
        let filtragem:Usuario[] = registros.filter( function(registro:Usuario){

            let encontrou:boolean = registro!.conteudo.toLowerCase().trim().indexOf( conteudo.toLowerCase().trim() ) != -1 ||
                                    registro!.titulo.toLowerCase().trim().indexOf( conteudo.toLowerCase().trim() ) != -1;

            if( encontrou == true ){
                return registro as Usuario;
            }

        });

        return filtragem;
    }

    /**
    * Retorna o array de notas SEM A NOTA CUJO ID È TAL
    * @param id 
    * @returns 
    */
    deleteById( idDeletar:string ): Array<Usuario>{
        let registros = this.selectAll();
        
        let filtragem:Usuario[] = registros.filter( function(registro:Usuario){

            let vaiDeletar:boolean = registro!.id == idDeletar;
                                     
            if( vaiDeletar == false ){
                return registro as Usuario;
            }

        });

        return filtragem;
    }

    /**
     * O ID deve permancecer intacto!
     * 
     * @param novaNotaRef 
     * @returns 
     */
    persistExistantRecord( novaNotaRef:Usuario ): boolean{
        let success = false;
        let idNota = novaNotaRef.id;
        let registros:Array<Usuario> = this.selectAll();

        let novosRegistros = registros.map(function( registro:Usuario, index:number ){
            if( registro.id == idNota ){
                return novaNotaRef;

            }else{
                return registro;
            }
        });

        let novosRegistrosStr:string = JSON.stringify(novosRegistros);

        localStorage.setItem(this.tableName, novosRegistrosStr)

        try{
            success = true;

        }catch(e:any){
            success = false;
        }

        return success;
    }

}

export default LocalDB;