import { IActor } from '../../types/shows';
import {
  ActorName,
  CharacterName,
  CastField,
  CastGrid,
  CastTitle,
  ActorBadge,
  CastWrapper,
} from './ShowCast.styled';

export function ShowCast({ cast = [] }: { cast: IActor[] }) {
  return (
    <CastWrapper>
      <CastTitle>Starring</CastTitle>
      {cast.length > 0 && (
        <CastGrid>
          {cast.map((actor) => (
            <CastField
              key={actor.person.id.toString() + actor.character.id.toString()}
            >
              <ActorBadge
                src={
                  actor.character.image?.medium || actor.person.image?.medium
                }
                alt={actor.person.name}
              />
              <ActorName>{actor.person.name}</ActorName>
              <CharacterName>{actor.character.name}</CharacterName>
            </CastField>
          ))}
        </CastGrid>
      )}
    </CastWrapper>
  );
}
