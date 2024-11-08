import * as S from './styles'
import { Produto } from '../../App'

import { adicionar as adicionarCarrinho } from '../../store/reducers/carrinho'
import { adicionar as adicionarFavoritos } from '../../store/reducers/favoritos'
import { useDispatch } from 'react-redux'

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

type Props = {
  produto: Produto
}

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar
        onClick={() => {
          dispatch(adicionarFavoritos(produto))
        }}
        type="button"
      >
        Adicionar aos Favoritos
      </S.BtnComprar>
      <S.BtnComprar
        onClick={() => dispatch(adicionarCarrinho(produto))}
        type="button"
      >
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
