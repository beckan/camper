import { useSignals } from '@preact/signals-react/runtime'
import { Flex, Grid, Heading } from '@radix-ui/themes'
import { Card } from '@renderer/components/card/card.component'
import { Clock } from '@renderer/components/clock.component'
import { Value } from '@renderer/components/value.component'
import { ladding, temperature, temperature2, temperature3 } from '@renderer/data'

export function ViewHome(): JSX.Element {
  useSignals()

  return (
    <Grid columns="3" gap="4" width="auto" height="100%">
      <Flex gridColumnStart="1" gridColumnEnd="3">
        <Card.Root>
          <Card.Content>
            <Clock />
          </Card.Content>
        </Card.Root>
      </Flex>
      <Flex>
        <Card.Root>
          <Card.Title icon={<span>⚡</span>}>Laddning</Card.Title>
          <div style={{ flexGrow: '1' }}></div>
          <Card.Content>
            <Value value={`${ladding.value}`} meta="%" />
          </Card.Content>
        </Card.Root>
      </Flex>
      <Flex>
        <Card.Root>
          <Card.Title icon={<span>🌡</span>}>Utomhus</Card.Title>
          <div style={{ flexGrow: '1' }}></div>
          <Card.Content>
            <Value value={`${temperature.value}`} meta="°C" />
          </Card.Content>
        </Card.Root>
      </Flex>
      <Flex>
        <Card.Root>
          <Card.Title icon={<span>🌡</span>}>Inomhus</Card.Title>
          <div style={{ flexGrow: '1' }}></div>
          <Card.Content>
            <Value value={`${temperature2.value}`} meta="°C" />
          </Card.Content>
        </Card.Root>
      </Flex>
      <Flex>
        <Card.Root>
          <Card.Title icon={<span>🌡</span>}>Bodelen</Card.Title>
          <div style={{ flexGrow: '1' }}></div>
          <Card.Content>
            <Value value={`${temperature3.value}`} meta="°C" />
          </Card.Content>
        </Card.Root>
      </Flex>
    </Grid>
  )
}
